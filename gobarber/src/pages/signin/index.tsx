import React from "react";
import { Image } from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Title, Icon } from "./style";

import logoImg from "../../assets/Logo.png";

export function SignIn() {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu Login</Title>
      <Input name="email" placeholder="E-mail">
        <Icon name="mail" size={20} color="#666360" />
      </Input>
      <Input name="email" placeholder="E-mail">
        <Icon name="lock" size={20} color="#666360" />
      </Input>
      <Button onPress={() => {}}>Entrar</Button>
    </Container>
  );
}
