import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, ActivityIndicator } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Accordion } from '../../../components/Accordion';
import { api } from '../../../services/api';
import { styles } from "./style";
import moment from "moment";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Aula({item}) {
    const data = moment(item.data).format("DD/MM/YYYY");

    function copyToClipboard() {
        Clipboard.setString(item.descricao);
    }

    return (
        <Accordion title={item.titulo} description={data} icon="book-open-variant">                   
            <TouchableOpacity style={styles.ViewInp} onPress={copyToClipboard}>
                <Text style={styles.inputLink}>Link: {item.descricao}</Text>
                <Icon name="content-copy" size={30} color="#000" />          
            </TouchableOpacity>                    
        </Accordion>
    );
}

export function AlunosMaterialScreen({ route }) {
    const [aulas, setAulas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getAulas() {
            try {
                const aulas = (await api.get(`turmas/${route.params.materiaId}/aulas`)).data;
                console.log(aulas);
                setAulas(aulas);
            } catch (error) {
                console.log(error);
            }            
            setLoading(false);
        }

        getAulas();        
    }, []);

    return (
        <View style={styles.container}>
            <Image style={styles.imagemCoruja} source={{ uri: "https://i.imgur.com/8gOfVoj.jpg" }} />
            <View style={styles.containerAulas}>
                { 
                    loading ?
                    <ActivityIndicator size={30} color="white" /> :
                    <FlatList
                        data={aulas}
                        renderItem={({ item }) => <Aula item={item} />}
                        keyExtractor={item => item.id}      
                        ListEmptyComponent={<Text style={styles.textEmpty}>Não há aulas cadastradas para essa turma</Text>}
                    />
                }                
            </View>
        </View>
    );
};
