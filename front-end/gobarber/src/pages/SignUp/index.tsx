import { Container, Content, Background } from "./styles";
import LogoImg from "../../assets/LogoImg.svg";
import { FiArrowLeft, FiMail, FiUser, FiLock } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import getValidationError from "../../utils/getValidationError";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useCallback, useRef } from "react";

export function SignUp() {
  const formRef = useRef<FormHandles>(null);

  console.log(formRef);

  const handleSubmit = useCallback(async (data: object) => {
    //console.log(data);

    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required("Nome é Obrigatorio"),
        email: Yup.string()
          .required("E-mail é obrigatorio")
          .email("Digite um e-mail válido"),
        password: Yup.string().min(6, "Minimo 6 digitos"),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err: any) {
      const errors = getValidationError(err);
      //console.log(errors);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={LogoImg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button>Cadastrar</Button>
        </Form>
        <a href="">
          <FiArrowLeft />
          Voltar para Logon
        </a>
      </Content>
    </Container>
  );
}
