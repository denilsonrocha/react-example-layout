import React, { Component } from 'react';

import Button from '../../components/Button';

import { Container, SignForm } from './styles';

export default class SignIn extends Component {
  render() {
    return (
      <Container>
        <SignForm onSubmit={() => {}}>
          <h1>Boas vindas</h1>
          <span>Email</span>
          <input type="email" name="email" />

          <span>senha</span>
          <input type="password" name="password" />

          <Button size="big" type="submit">
            Entrar
          </Button>
        </SignForm>
      </Container>
    );
  }
}
