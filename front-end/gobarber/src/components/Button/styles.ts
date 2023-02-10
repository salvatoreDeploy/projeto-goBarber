import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.button`
  background: #ff9000;
  color: #312e38;
  border-radius: 10px;
  border: none;
  height: 56px;
  padding: 0 16;
  width: 100%;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, "#ff9000")};
  }
`;
