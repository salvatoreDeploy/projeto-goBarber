import React from "react";
import { Image } from "react-native";

import { Container } from "./style";

import logoImg from "../../assets/Logo.png";

export function SignIn() {
  return (
    <Container>
      <Image source={logoImg} />
    </Container>
  );
}
