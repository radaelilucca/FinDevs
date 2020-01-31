import Dev from '../models/Devs';
import parseStingAsArray from '../utils/parseStingAsArray';

class SearchController {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;
     

    const uppperTechs = techs.toUpperCase();
    const techsArray = parseStingAsArray(uppperTechs);


    const devs = await Dev.find({
      active: true,
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 30000,
        },
      },
    });

    return res.json(devs);
  }
}

export default new SearchController();
