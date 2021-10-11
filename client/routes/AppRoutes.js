import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/AlunoInicialScreen";
import { TelaLoginScreen } from "../screens/TelaLoginScreen";

const Stack = createNativeStackNavigator();

function ProfessorRoutes() {
    return (
        <Stack.Navigator 
            initialRouteName="SignIn"
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

function AlunosRoutes() {
    return (
        <Stack.Navigator 
            initialRouteName="SignIn"
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

export function AuthRoutes() {
    const { userType } = useUser();

    return (
        <>
            {
                userType === "aluno" ?
                <AlunosRoutes /> :
                <ProfessorRoutes />
            }
        </>
    );
}