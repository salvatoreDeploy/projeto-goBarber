import styled from "styled-components/native";
import Ionicons from "@expo/vector-icons/Feather";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;
export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: "RobotoSlab_500Medium";
  margin: 64px 0 24px;
`;

export const Icon = styled(Ionicons)`
  margin-right: 16px;
`;
