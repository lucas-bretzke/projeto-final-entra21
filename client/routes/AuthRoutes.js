import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/AlunoInicialScreen";
import { TelaLoginScreen } from "../screens/TelaLoginScreen";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 44
                },
                headerTitleAlign: "center"
            }}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Login"
                component={TelaLoginScreen} 
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}