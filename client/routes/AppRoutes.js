import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfessorHomeScreen } from "../screens/ProfessorScreens/ProfessorHomeScreen";
import { CriarProvasScreen } from "../screens/ProfessorScreens/CriarProvasScreen";
import { MateriaScreen } from "../screens/ProfessorScreens/MateriaScreen";
import { AlunoHomeScreen } from "../screens/AlunoScreens/AlunoHomeScreen";
import { AlunosFrequenciaScreen } from "../screens/AlunoScreens/Frequencia";
import { AlunosMaterialScreen } from "../screens/AlunoScreens/Material";
import { AlunosNotasScreen } from "../screens/AlunoScreens/Notas";
import { useUser } from "../contexts/UserContext";
import { PresencaScreen } from "../screens/ProfessorScreens/PresencaScreen";

const Stack = createNativeStackNavigator();

function ProfessorRoutes() {
    return (
        <Stack.Navigator 
            initialRouteName="HomeProfessor"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#152036"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 44
                },
                headerTitleAlign: "center"
            }}>
            <Stack.Screen
                options={{ headerShown: false }}
                name="HomeProfessor"
                component={ProfessorHomeScreen} />
            <Stack.Screen
                name="CriarProvas"
                component={CriarProvasScreen} />
            <Stack.Screen
                name="Materiais"
                component={MateriaScreen}  
                options={({ route }) => ({ title: route.params.title })}
            />
            <Stack.Screen
                name="Presenca"
                component={PresencaScreen}  
                options={{ title: "Presença" }}
                />
                
        </Stack.Navigator>
    );
}

function AlunosRoutes() {
    return (
        <Stack.Navigator 
            initialRouteName="AlunoHome"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#152036"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 44
                },
                headerTitleAlign: "center"
            }}>
            <Stack.Screen
                name="AlunoHome"
                component={AlunoHomeScreen}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Frequencia"
                component={AlunosFrequenciaScreen} />
            <Stack.Screen
                name="Material"
                component={AlunosMaterialScreen}/>
            <Stack.Screen
                name="Notas"
                component={AlunosNotasScreen} />
        </Stack.Navigator>
    );
}

export function AppRoutes() {
    const { state } = useUser();

    console.log(state);
    return (
        <>
            {
                state.user.permissao === "aluno" ?
                <AlunosRoutes /> :
                <ProfessorRoutes />
            }
        </>
    );
}