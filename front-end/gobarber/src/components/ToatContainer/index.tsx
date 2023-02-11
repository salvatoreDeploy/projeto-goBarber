import { Container } from "./styles";

import { FiAlertCircle, FiXCircle } from "react-icons/fi";
import { ToastMessage, useToast } from "../../hook/ToastContext";
import { Toast } from "../Toast";

interface ToastContainerProps {
  messages: ToastMessage[];
}

export function ToastContainer({ messages }: ToastContainerProps) {
  const { removeToast } = useToast();

  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
}
