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
    Alert,
    ActivityIndicator,
    ScrollView

} from 'react-native';
import { styles } from './styles';
import { Accordion } from '../../../components/Accordion';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DatePicker } from '../../../components/DatePicker';
import { api } from '../../../services/api';
import moment from "moment";

function Aula({item}) {
    const data = moment(item.data).format("DD/MM/YYYY");

    const [descricao, setDescricao] = useState(item.descricao);

    async function handleEditarAula() {
        try {
            (await api.put(`/aula/${item.id}`, { descricao })).data;
            Alert.alert("Sucesso", "Link adicionado");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Accordion title={item.titulo} description={data} icon="book-open-variant">                   
            <View style={styles.ViewInP}>
                <TextInput style={styles.inputLink} placeholder="InserirLink:" value={descricao} onChangeText={setDescricao} />
            </View>
        
            <TouchableOpacity style={styles.ButtonSlvr} onPress={handleEditarAula}>
                <Text style={styles.text}>Salvar</Text>
            </TouchableOpacity>                
        </Accordion>
    );
}

export function MateriaScreen({ route }) {
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
    const [opacity] = useState(new Animated.Value(0));

    const [aulas, setAulas] = useState([]);

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

    const [loading, setLoading] = useState(true);

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

    
    const [nome, setNome] = useState("");
    const [data, setData] = useState(new Date());
    const [descricao, setDescricao] = useState("");

    async function handleCriarAula() {
        if (!nome) {
            return Alert.alert("Erro", "Preencha o título da aula");
        }        

        try {
            const aula = (await api.post("/aula", {titulo: nome, descricao, data, turmaId: route.params.materiaId})).data;
            setAulas(prevAulas => [...prevAulas, aula]);
            Alert.alert("Sucesso", "Aula cadastrada com sucesso!");
        } catch (error) {
            console.log(error);
            Alert.alert("Erro", "Não foi possível criar a aula");
        }

        setNome("");
        setData(new Date());
        setDescricao("");
    }

    return (
        <ScrollView style={{ backgroundColor: '#182e45' }}>
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

                    <Accordion title="Criar aula" icon="comment-arrow-right">
                        <View style={styles.ViewInpP}>
                            <TextInput style={styles.input1} placeholder="Título da aula:" value={nome} onChangeText={setNome} />
                            <DatePicker date={data} setDate={setData}/>
                            <TextInput style={styles.input1} placeholder="Inserir link:" value={descricao} onChangeText={setDescricao} />
                        </View>
                        <TouchableOpacity style={styles.ButtonSlvr} onPress={handleCriarAula}>
                            <Text style={styles.text}>Salvar</Text>
                        </TouchableOpacity>
                    </Accordion>

                    <Text style={styles.titleAula}>Aulas cadastradas</Text>

                    { 
                        loading ? 
                            <ActivityIndicator size="small" color="#fff" />    
                        :  <FlatList 
                            data={aulas}
                            renderItem={({item}) => <Aula item={item} />}
                            keyExtractor={item => ""+item.id}                                    
                        />
                    }


                
                </Animated.View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};