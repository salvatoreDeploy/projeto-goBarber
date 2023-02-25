import React from "react";
import { Image } from "react-native";

import { Container, Title } from "./style";

import logoImg from "../../assets/Logo.png";

export function SignIn() {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu Logon</Title>
    </Container>
  );
}
