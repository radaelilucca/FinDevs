/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import './styles.css';

function DevForm({ onSubmit }) {
  const [github_user, setGithub_user] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [isValid, setIsValid] = useState(true);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      },
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsValid(true);

    if (github_user === '') {
      setIsValid(false);
    }
    await onSubmit({
      github_user,
      techs,
      latitude,
      longitude,
    });
    setGithub_user('');
    setTechs('');
    setIsValid(true);
  }

  return (
    <>
      <h1>Novo Dev</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="Usuário do Github">Usuário no Github</label>
          <input
            name="github_user"
            id="github_user"
            required
            value={github_user}
            onChange={(e) => setGithub_user(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input
            name="techs"
            id="techs"
            required
            value={techs}
            onChange={(e) => setTechs(e.target.value)}
          />
        </div>
        <div className="input-group">
          <div className="input-block">
            <label htmlFor="techs">Laitude</label>
            <input
              name="Latitude"
              type="number"
              id="Latitude"
              required
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Longitude</label>
            <input
              name="Longitude"
              type="number"
              id="Longitude"
              required
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className={`${isValid ? 'validForm' : 'notValid'}`}
          onClick={handleSubmit}
        >
Enviar

        </button>
      </form>
    </>
  );
}

export default DevForm;
