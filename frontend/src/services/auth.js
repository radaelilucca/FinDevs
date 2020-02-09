/* eslint-disable import/no-cycle */
import jwt from 'jsonwebtoken';
import promisify from 'util';
import api from './api';

import authConfig from '../config/auth';

export const TOKEN_KEY = 'findevs-token';

export const isAuthenticaded = () => localStorage.getItem(TOKEN_KEY) !== null;

const getToken = () => localStorage.getItem('findevs-token');


export { getToken };
