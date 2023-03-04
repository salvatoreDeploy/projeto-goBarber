import React, { ReactComponentElement } from "react";
import { TextInputProps, TextProps } from "react-native";

import { Container, TextInput } from "./style";

interface InputProps extends TextInputProps {
  name: string;
  children: React.ReactNode;
}

export function Input({ name, children, ...props }: InputProps) {
  return (
    <Container>
      {children}
      <TextInput placeholderTextColor="#666360" {...props} />
    </Container>
  );
}
