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

    // check if dev already exists in database
    let dev = await Dev.findOne({ github_user });

    if (!dev) {
      const upperTechs = upperCaseTechs(techs);

      try {
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
      } catch (error) {
        return res.status(404).json({ error: 'GitHub user does not exist.' });
      }
    }

    return res.json(dev);
  }

  async index(req, res) {
    // TESTANDO UPPER NOS EXISTENTES

    const devs = await Dev.find({
      active: true,
      github_user: { $ne: req.userId },
    });

    return res.json(devs);
  }

  async update(req, res) {
    // toggle invisivbility
    const { github_user } = req.params;
    const dev = await Dev.findOne({ github_user });

    if (!dev) {
      return res.status(404).json({
        status: 404,
        error: 'Not Found',
        message: `This ${github_user} github user is not registred!`,
      });
    }

    const { _id } = dev;
    // check if user is visible, and hide.
    if (dev.active === true) {
      const inativeDev = await Dev.findByIdAndUpdate(_id, {
        active: false,
      });
      return res.json({
        status: 200,
        message: `The user ${github_user} is invisible now!`,
      });
    }

    const inativeDev = await Dev.findByIdAndUpdate(_id, {
      active: true,
    });

    return res.json({
      status: 200,
      message: `The user ${github_user} is visible now!`,
    });
  }

  // get a single dev
  async show(req, res) {
    // i'm studying how to fix that shit -- shhhhh
    const { github_user } = req.params;

    const devs = await Dev.find({ github_user });

    const dev = devs[0];

    return res.json(dev);
  }
}

export default new DevController();
