import React, { useEffect, useState } from 'react';

import {
    Button,
    View,
    Text,
    Animated,
    Image,
    Pressable,
    KeyboardAvoidingView,
    TextInput,
} from 'react-native';
import { List } from 'react-native-paper';
import { styles } from './styles';
import React2 from '../../../assets/react22';
import { Accordion } from '../../../components';



export function MateriaReact() {
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
    const [opacity] = useState(new Animated.Value(0));


    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    useEffect(() => {
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 1,
                speed: 500,
                bounciness: 20,
                useNativeDriver: false
            }),
            Animated.timing(opacity, {
                toValue: 10,
                duration: 10000,
                useNativeDriver: false
            })
        ]).start();
    }, []);



    return (
        <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#182e45', }}>
            <Animated.View style={styles.containerImg}
                style={[styles.containerImg, {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y }
                    ]
                }]}

            >
                <Image style={styles.imgUser}
                    source={React2} />
            </Animated.View>

            <Animated.View

                style={[styles.containerList, {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y }
                    ]
                }
                ]}
            >

                <Accordion title="Criar aula" icon="comment-arrow-right">
                    <View style={styles.ViewInp}>
                        <TextInput style={styles.input} placeholder="Nome da aula:" />
                        <TextInput style={styles.input} placeholder="Data da aula:" />
                        <TextInput style={styles.input} placeholder="Inserir link:" />
                    </View>
                    <View> <Button style={{ backgroundColor: 'red' }} title="Salvar"></Button></View>
                </Accordion>

                <Accordion title="Aula 5" icon="react">
                    <View style={styles.ViewInp}>
                        <TextInput style={styles.input} placeholder="Nome da aula:" />
                        <TextInput style={styles.input} placeholder="Botão a mais:" />
                        <TextInput style={styles.input} placeholder="Link:" />
                    </View>
                    <View> <Button style={{ backgroundColor: 'red' }} title="Salvar"></Button></View>
                </Accordion>




            </Animated.View>
        </KeyboardAvoidingView>
    );
};