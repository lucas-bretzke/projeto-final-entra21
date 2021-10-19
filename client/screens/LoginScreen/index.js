import React, { useEffect, useState } from "react";
import {
    KeyboardAvoidingView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    Animated,
    Keyboard,
    ActivityIndicator,
    Alert,
} from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { AntDesign } from '@expo/vector-icons';

import { styles } from "./styles";

export function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({ x: 130, y: 130 }));

    useEffect(() => {
        KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 1,
                speed: 4,
                bounciness: 20,
                useNativeDriver: false
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: false
            })
        ]).start();
    }, []);

    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 70,
                duration: 1000,
                useNativeDriver: false
            }),

            Animated.timing(logo.y, {
                toValue: 70,
                duration: 1000,
                useNativeDriver: false
            }),
        ]).start();
    }

    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 130,
                duration: 100,
                useNativeDriver: false
            }),

            Animated.timing(logo.y, {
                toValue: 130,
                duration: 100,
                useNativeDriver: false
            }),
        ]).start();
    }

    const [isLoading, setIsLoading] = useState(false);
    const { authActions } = useAuth();

    async function handleSignIn() {
        try {
            setIsLoading(true);
            await authActions.signIn(email, password);
        } catch (error) {
            Alert.alert("Falha no login", "E-mail ou senha incorretos");
            setIsLoading(false);
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">

            <View style={styles.containerLogo}>
                <Animated.Image
                    style={{
                        borderRadius: 100,
                        marginHorizontal: 100,
                        width: logo.x,
                        height: logo.y
                    }}
                    source={{ uri: "https://i.imgur.com/8gOfVoj.jpg" }} />

            </View>

            <Animated.View
                style={[styles.container2, {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y }
                    ]
                }
                ]}
            >
                <View style={styles.ViewInput}>
                    <AntDesign name="team" size={30} color="white" />

                    <TextInput style={styles.input}
                        placeholder="Email:"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.ViewInput}>
                    <AntDesign name="lock1" size={30} color="white" />
                    <TextInput style={styles.input}
                        placeholder="Senha:"
                        autoCorrect={false}
                        value={password}
                        secureTextEntry
                        onChangeText={setPassword}
                    />
                </View>

                <TouchableOpacity style={[styles.botao3, isLoading && { backgroundColor: "#ccc" }]} onPress={handleSignIn} disabled={isLoading}>
                    {
                        isLoading &&
                        <ActivityIndicator size="small" color="#fff" />
                    }                                        
                    <Text style={styles.textoBotao}>Entrar</Text>
                </TouchableOpacity>

            </Animated.View>

        </KeyboardAvoidingView>
    );
}