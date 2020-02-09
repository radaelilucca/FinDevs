import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  LoginBox,
  SideBox,
  Button,

} from './styles';

import '../../global.css';
import SignInForm from '../../components/SignInForm';

import { getToken } from '../../services/auth';

function SignIn({ history }) {
  // look for a saved token
  useEffect(() => {
    const token = getToken();
    if (token) {
      history.push('/app');
    }
  }, []);

  // mover esta lógica para outro arquivo.


  return (
    <Container>

      <LoginBox>
        <SignInForm history={history} />
      </LoginBox>

      <SideBox>
        <h1>Wellcome back, Dev!</h1>
        <h2>Log in to find other Devs!</h2>
        <p>Don't have an Account yet?</p>
        <Link to="/signup">
          <Button>SIGN UP</Button>
        </Link>
      </SideBox>

    </Container>
  );
}
export default SignIn;
