import React from "react";
import { Container, Toast } from "./styles";
import { FiAlertCircle, FiXCircle } from "react-icons/fi";

export function ToastContainer() {
  return (
    <Container>
      <Toast type="error" hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um Erro</strong>
          <p>Não foi possivel efetuar login na aplicação</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="success" hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um Erro</strong>
          <p>Não foi possivel efetuar login na aplicação</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="info" hasDescription={false}>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um Erro</strong>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
}
