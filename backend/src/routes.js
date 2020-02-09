import { Router } from 'express';

import DevController from './controllers/DevController';
import SearchController from './controllers/SearchController';
import SessionController from './controllers/SessionController';

import authMiddleware from './middlewares/auth';

const routes = Router();

// create a dev
routes.post('/devs', DevController.store);

// login
routes.post('/login', SessionController.store);

// Auth required routes

routes.use(authMiddleware);

// list all devs
routes.get('/devs', DevController.index);

// get a single dev
routes.get('/dev/:github_user', DevController.show);

// hide/show a dev
routes.put('/devs/hide/:github_user', DevController.update);

// search devs
routes.get('/search', SearchController.index);

export default routes;
