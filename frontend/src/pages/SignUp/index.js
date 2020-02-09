/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import Swal from 'sweetalert2';

import {
  FaGithubAlt, FaKey, FaCompass, FaCode,
} from 'react-icons/fa';
import {
  Container, SignUpBox, SideBox, Button, Form,
} from './styles';

import api from '../../services/api';
import '../../global.css';
import logo from '../../assets/Logo3.png';
import SignUpForm from '../../components/SignUpForm';

export default function SignUp({ history }) {
  return (
    <Container>
      <SideBox>
        <h1>Hello, Dev!</h1>
        <h2>Create an Account and find some Devs arround you!</h2>
        <div className="login-option">
          <p>Already have an Account?</p>
          <Link to="/">
            <Button>SIGN IN</Button>
          </Link>
        </div>
      </SideBox>

      <SignUpBox>
        <SignUpForm history={history} />
      </SignUpBox>
    </Container>
  );
}
