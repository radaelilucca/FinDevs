/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';

import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

import api from '../../services/api';


import '../../global.css';
import '../../Sidebar.css';
import './Main.css';

import DevItem from '../../components/DevItem';
import DevProfile from '../../components/DevProfile';

// import logo from '../../assets/Logo3.png';

function Main({ history }) {
  const [devs, setDevs] = useState([]);
  const [loggedDev, setLoggedDev] = useState('');


  useEffect(() => {
    async function loadLoggedDev() {
      const token = await localStorage.getItem('findevs-token');

      const decoded = await promisify(jwt.verify)(token, authConfig.secret);

      const { github_user } = decoded;

      const response = await api.get(`dev/${github_user}`);

      setLoggedDev(response.data);
    }

    loadLoggedDev();
  }, []);

  // load devs
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    // decode token to get logged user


    loadDevs();
  }, []);


  // inative user - disable
  function hadleHide() {
    alert('This feat is under construction for now!');
  }

  // logout func
  function logout() {
    localStorage.removeItem('findevs-token');
    history.push('/');
  }


  return (
    <div id="main">
      <aside>
        <DevProfile dev={loggedDev} key={loggedDev.name} logout={logout} handleHide={hadleHide} />
      </aside>
      <main>
        <ul>
          {devs.map((dev) => (
            <DevItem dev={dev} key={dev._id} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Main;
