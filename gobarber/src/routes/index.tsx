import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../pages/signin";
import { SignUp } from "../pages/signup";
import { NavigationContainer } from "@react-navigation/native";

const Auth = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#312e38" },
      }}
    >
      <Auth.Screen name="Signin" component={SignIn} />
      <Auth.Screen name="Signup" component={SignUp} />
    </Auth.Navigator>
  );
}
