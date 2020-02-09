/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  FaUserEdit, FaEyeSlash, FaSignOutAlt, FaCode,
} from 'react-icons/fa';

import { Container, Buttons, DevTechs } from './styles';

function DevProfile({ dev, logout, handleHide }) {
  return (
    <>
      <Container>
        <img src={dev.avatar_url} alt={dev.github_user} />
        <h1>{dev.name}</h1>
        <a href={`http://github.com/${dev.github_user}`} target="blank">
          <h3>
            @
            {dev.github_user}
          </h3>
        </a>
        <p>{dev.bio}</p>
        <DevTechs>
          <p>
            { dev.techs ? dev.techs.join(', ') : 'Loading'}
          </p>

        </DevTechs>

        <Buttons>
          <div>
            <button
              onClick={() => {
                alert('This feat is under construction for now!');
              }}
            >
              <FaUserEdit />
            </button>
            <p>Edit Profile</p>
          </div>

          <div>
            <button
              onClick={handleHide}
            >
              <FaEyeSlash />
              {' '}
            </button>
            <p>Hide Yourself</p>
          </div>
          <div>
            <button
              onClick={logout}
            >
              <FaSignOutAlt />
              {' '}
            </button>
            <p>SignOut</p>
          </div>
        </Buttons>
      </Container>
    </>
  );
}

export default DevProfile;
