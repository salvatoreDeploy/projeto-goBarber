import React from "react";
import { Image } from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Title } from "./style";

import logoImg from "../../assets/Logo.png";

export function SignIn() {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu Login</Title>
      <Input />
      <Input />
      <Button onPress={()=> {}}>Entrar</Button>
    </Container>
  );
}
