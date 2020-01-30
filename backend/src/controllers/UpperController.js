import Dev from '../models/Devs';

class UpperController {
  async update(req, res) {
    const devs = await Dev.find();

    devs.map(async dev => {
      const { github_user, techs } = dev;
      const selectedDev = await Dev.findOne({ github_user });

      const upperTechs = techs.map(tech => tech.toUpperCase());

      selectedDev.techs = upperTechs;

      await selectedDev.save();
    });

    return res.json(devs);
  }
}

export default new UpperController();
