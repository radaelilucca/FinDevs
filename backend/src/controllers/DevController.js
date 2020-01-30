import axios from 'axios';
import bcrypt from 'bcryptjs';
import Dev from '../models/Devs';

import parseStingAsArray from '../utils/parseStingAsArray';

import upperCaseTechs from '../utils/upperCaseTechs';

import { findConnections, sendMessage } from '../websocket';

class DevController {
  async store(req, res) {
    const {
      github_user,
      techs,
      latitude,
      longitude,
      password,

      // admin,
    } = req.body;

    let dev = await Dev.findOne({ github_user });

    if (!dev) {
      const upperTechs = upperCaseTechs(techs);

      const response = await axios.get(
        `https://api.github.com/users/${github_user}`
      );

      const { name = login, bio, avatar_url } = response.data;

      const techsArray = await parseStingAsArray(upperTechs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      const password_hash = await bcrypt.hash(password, 8);

      dev = await Dev.create({
        github_user,
        password_hash,
        admin: false,
        name,
        bio,
        avatar_url,
        techs: techsArray,
        location,
      });

      const sendSocketMessageTo = findConnections(
        { latitude, longitude },
        techsArray
      );

      sendMessage(sendSocketMessageTo, 'new-dev', dev);
    }

    return res.json(dev);
  }

  async index(req, res) {
    // TESTANDO UPPER NOS EXISTENTES

    const devs = await Dev.find({ active: true });

    return res.json(devs);
  }

  async update(req, res) {
    const { github_user } = req.params;
    const dev = await Dev.findOne({ github_user });

    if (!dev) {
      return res.status(404).json({
        status: 404,
        error: 'Not Found',
        message: `O username ${github_user} não existe na base!`,
      });
    }

    const { _id } = dev;

    const inativeDev = await Dev.findByIdAndUpdate(_id, {
      active: false,
    });

    return res.json({
      status: 200,
      message: `Usuário ${github_user} foi deletado com sucesso!`,
    });
  }
}

export default new DevController();
