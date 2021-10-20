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
    ActivityIndicator
} from 'react-native';
import { List } from 'react-native-paper';
import { useAuth } from '../../../contexts/AuthContext';
import { api } from '../../../services/api';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';




export function ProfessorHomeScreen({ navigation }) {
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
    const [opacity] = useState(new Animated.Value(0));


    const [expanded, setExpanded] = React.useState(true);    
    const [loading, setLoading] = useState(true);

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
                console.log(error);
            }
        }

        getTurmas();
        setLoading(false);
    }, []);

    const { authActions } = useAuth();

    function renderTurma({ item }) {
        return (
            <List.Section style={{ marginHorizontal: 30, }}>
                <List.Accordion
                    title={item.nome}
                    left={props => <List.Icon {...props} icon={item.icone} />}
                    style={{
                        backgroundColor: '#b38a0e'                        
                    }}
                    description={item.descricao}
                >
                    <List.Item left={props => <List.Icon {...props}
                        icon="book-multiple" />}
                        style={styles.itemsList}
                        onPress={() => navigation.push("Materiais", { title: item.name, materiaId: item.id, icone: item.icone })} 
                        title="Materiais" />
                    <List.Item left={props => <List.Icon {...props}
                        icon="calendar-multiple" />}
                        style={styles.itemsList}     
                        onPress={() => navigation.push("Presenca", { title: item.name, materiaId: item.id, icone: item.icone })}                                 
                        title="Presença" 
                    />
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
                    loading ? 
                        <ActivityIndicator size="small" color="#fff" />    
                    : <FlatList 
                        data={turmas}
                        renderItem={renderTurma}
                        keyExtractor={item => "" + item.id}
                    />
                }
                
            </Animated.View>
        </KeyboardAvoidingView>
    );
};
