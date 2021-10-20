import React, { useEffect, useState } from 'react';
import {
    Button,
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    Image,
    Animated,
    Keyboard,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import { api } from '../../../services/api';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAuth } from '../../../contexts/AuthContext';

export function AlunoHomeScreen({ navigation }) {
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
    const [opacity] = useState(new Animated.Value(0));

    const { authActions } = useAuth();

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    useEffect(() => {
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 1,
                speed: 600,
                bounciness: 20,
                useNativeDriver: false
            }),
            Animated.timing(opacity, {
                toValue: 10,
                duration: 5000,
                useNativeDriver: false
            })
        ]).start();
    }, []);

    const [turmas, setTurmas] = useState([]);

    useEffect(() => {
        async function getTurmas() {
            try {
                const turmas = (await api.get("/turmas")).data;

                setTurmas(turmas);
            } catch (error) {

            }
        }

        getTurmas();
    }, []);

    function renderTurma({ item }) {
        return (
            <List.Section key={item.id} style={{ marginHorizontal: 30, }}>                
                <List.Accordion
                    title={item.nome}
                    left={props => <List.Icon {...props} icon={item.icone} />}
                    style={{
                        backgroundColor: '#b38a0e',
                        borderBottomWidth: 5
                    }}
                    description={item.descricao}
                >
                    <List.Item left={props => <List.Icon {...props}
                        icon="book-multiple" />}
                        style={styles.itemsList}
                        onPress={() => navigation.push("Material", { materiaId: item.id })} title="Materiais" />
                </List.Accordion>
            </List.Section>
        );
    }


    return (

        < KeyboardAvoidingView style={styles.container}>
            <TouchableOpacity onPress={() => authActions.signOut()} style={styles.buttonSair}>
                    <Icon name="times-circle" size={44} color="white" />
            </TouchableOpacity>
            <Animated.View
                style={[styles.containerImg, {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y }
                    ]
                }
                ]}>
                <Image style={styles.ImgUser}
                    source={{ uri: "https://i.imgur.com/8gOfVoj.jpg" }} />
            </Animated.View>


            <Animated.View
                style={[styles.container2, {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y }
                    ]
                }
                ]}
            >
                {
                    <FlatList
                        renderItem={renderTurma}
                        data={turmas}
                        keyExtractor={item => "" + item.id}
                    />
                }
            </Animated.View>
        </KeyboardAvoidingView>
    );
};
