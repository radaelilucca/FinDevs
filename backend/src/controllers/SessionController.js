import jwt from 'jsonwebtoken';
import Dev from '../models/Devs';

import checkPassword from '../utils/CheckPassword';

import authConfig from '../config/auth';

class SessionController {
  async store(req, res) {
    const { github_user, password } = req.body;

    const dev = await Dev.findOne({ github_user });
    // check github user
    if (!dev) {
      return res
        .status(404)
        .json({ error: 'User not found. Please SignUp first!' });
    }

    const { name, password_hash } = dev;

    // check password
    const validPasswd = await checkPassword(password, password_hash);

    if (!validPasswd) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    return res.json({
      dev: {
        github_user,
        name,
      },
      token: jwt.sign({ github_user }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
