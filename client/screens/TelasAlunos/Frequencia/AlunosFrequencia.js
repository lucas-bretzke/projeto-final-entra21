import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import imagemCoruja from "../../../../assets/coruja.png";
import { styles } from "./Style";
import { Entypo } from '@expo/vector-icons';

export function AlunosFrequencia() {
    return (
        <>

            <View>
                
                <View style={styles.containercoruja}>
                    <Image style={styles.imagemCoruja} source={imagemCoruja} />
                </View>
            </View>

            <View style={styles.container2}>

                <TouchableOpacity style={styles.botao} >
                    <Text>Trimestre 1: 100%</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} >
                    <Text>Trimestre 2: 100%</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} >
                    <Text>Trimestre 3: 100%</Text>
                </TouchableOpacity>

            </View>
        </>
    );
};