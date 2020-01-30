import React, { Component } from "react";
import { Link } from "react-router-dom";

//import Logo from "../../assets/airbnb-logo.svg";

import { Form, Container } from "./styles";

class SignUp extends Component {
  state = {
    github_user: "",
    password: "",
    
  };

  handleSignUp = e => {
    e.preventDefault();
    alert("Eu vou te registrar");
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          
          
          <input
            type="text"
            placeholder="Usuário no Github"
            onChange={e => this.setState({ github_user: e.target.value })}
          />
          <input
            type="password"
            placeholder="Crie uma Senha Secreta"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Cadastrar</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default SignUp;