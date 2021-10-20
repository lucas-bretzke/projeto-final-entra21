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
    ActivityIndicator,
    FlatList,
    Alert
} from 'react-native';
import { styles } from './styles';
import { Accordion } from '../../../components/Accordion';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { api } from '../../../services/api';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from "moment";

function Aluno({ aluno }) {    
    const [presente, setPresente] = useState(false);

    return (
        <View style={styles.alunoContainer}>
            <Text>{aluno.name}</Text>
            <TouchableOpacity onPress={() => setPresente(prevState => !prevState)} style={[styles.checkbox, presente && { backgroundColor: "#2e6e1d", borderColor: "#2e6e1d"}]}>
                {
                    presente &&
                    <Icon name="check-bold" size={25} color="#fff" />
                }                
            </TouchableOpacity>                                        
        </View>
    );
}

function Aula({ item, turmaId }) {
    const data = moment(item.data).format("DD/MM/YYYY");
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        async function getAlunosFromTurma() {
            try {
                const alunos = (await api.get(`/turmas/${turmaId}/alunos`)).data;                
                setAlunos(alunos);
            } catch (error) {
                console.log(error);
            }
        }

        getAlunosFromTurma();
    }, []);


    function handleSalvarPresenca() {
        Alert.alert("Sucesso", "Presença cadastrada com sucesso!");
    }

    return (
        <Accordion title={item.titulo} description={data} icon="book-open-variant">
            <View style={styles.cabecalho}>
                <Text style={styles.cabecalhoText}>Aluno</Text>
                <Text style={styles.cabecalhoText}>Presente</Text>
            </View>
            <FlatList
                keyExtractor={item => "" + item.id}
                data={alunos}
                renderItem={({ item }) => <Aluno aluno={item} />}
            />            
            <TouchableOpacity style={styles.ButtonSlvr} onPress={handleSalvarPresenca}>
                <Text style={styles.text}>Salvar</Text>
            </TouchableOpacity>
        </Accordion>
    );
}

export function PresencaScreen({ route }) {
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
    const [opacity] = useState(new Animated.Value(0));



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

    const [aulas, setAulas] = useState([]);

    useEffect(() => {        
        async function getAulas() {
            try {
                const aulas = (await api.get(`turmas/${route.params.materiaId}/aulas`)).data;

                setAulas(aulas);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }

        getAulas();
    }, []);

    const [loading, setLoading] = useState(true);



    return (
        <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#182e45', }}>

            <Animated.View
                style={[styles.containerImg, {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y }
                    ]
                }]}

            >
                <Icon name={route.params.icone} size={100} color="white" style={styles.materiaIcone} />
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

                {
                    loading ?
                        <ActivityIndicator size="small" color="#fff" />
                        : <FlatList
                            data={aulas}
                            renderItem={({ item }) => <Aula item={item} turmaId={route.params.materiaId} />}
                            keyExtractor={item => "" + item.id}
                            ListEmptyComponent={<Text style={styles.textEmpty}>Não há aulas cadastradas</Text>}
                        />
                }

            </Animated.View>
        </KeyboardAvoidingView>
    );
};