import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { View } from "react-native";
import { AuthRoutes } from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <View style={{ flex: 1, backgroundColor: "#312e38" }}>
        <AuthRoutes />
      </View>
    </NavigationContainer>
  );
}
