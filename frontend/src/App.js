/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';

import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';
import logo from './assets/Logo3.png';


function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, [devs]);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  async function handleInativeDev(data) {

    console.log(data)
    
    await api.put(`/devs/delete/${data}`);
    console.log(data.github_user)
    

    const filterDevs = devs.filter(
      dev => dev.github_user !== data.github_user
    );

    console.log(filterDevs)

    setDevs(filterDevs);
  }


  return (
    <div id="app">
      <aside>
        <img src={logo} alt="" />
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem dev={dev} key={dev._id} deletar={handleInativeDev}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
