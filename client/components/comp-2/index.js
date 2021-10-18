import React, { useState } from "react";
import { View, Button } from "react-native";
import { List } from "react-native-paper";
import { styles } from '../../screens/ProfessorScreens/MateriaScreen/styles';

export function ListItem({ title, description, icon }) {
    return (
        <View style={styles.ViewImp}>
            <List.Item
                title={title}
                description={description}
                onPress={() => setOpen(prevOpen => !prevOpen)}
                left={props => <List.Icon {...props} icon={icon} />}

            />
                <Text style={styles.textDaProva}>Lucas bretzke</Text>
                <TextInput style={styles.inpDaProva} placeholder="Nota:" />
                
        </View>
    );

}
