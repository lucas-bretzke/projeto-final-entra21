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
import { List } from 'react-native-paper';
import { styles } from './styles';
import UserProf from '../../../assets/coruja.png';




export function InicialProfessor() {
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
    const [opacity] = useState(new Animated.Value(0));


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


    return (

        < KeyboardAvoidingView style={styles.container}>
            <Animated.View
                style={[styles.containerImg, {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y }
                    ]
                }
                ]}>
                <Image style={styles.ImgUser}
                    source={UserProf} />
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




                <List.Section style={{ marginHorizontal: 30, }}>
                    <List.Accordion
                        title="Java"
                        left={props => <List.Icon {...props} icon="language-javascript" />}
                        style={{
                            backgroundColor: '#b38a0e',
                            borderBottomWidth: 5
                        }}
                        description="Timbó/matutino"
                    >
                        <List.Item left={props => <List.Icon {...props}
                            icon="book-multiple" />}
                            style={styles.itemsList}
                            onPress={handlePress} title="Materiais" />
                        <List.Item left={props => <List.Icon {...props}
                            icon="numeric-9-plus-box-multiple" />}
                            style={styles.itemsList}
                            onPress={handlePress} title="Notas" />
                        <List.Item left={props => <List.Icon {...props}
                            icon="calendar-multiple" />}
                            style={styles.itemsList}
                            onPress={handlePress} title="Preseça" />
                    </List.Accordion>
                </List.Section>


                <List.Section style={{ marginHorizontal: 30, }}>
                    <List.Accordion
                        title="React-native"
                        left={props => <List.Icon {...props} icon="react" />}
                        style={{
                            backgroundColor: '#b38a0e',
                            borderBottomWidth: 5,
                        }}
                        description="Timbó/matutino"
                    >
                        <List.Item left={props => <List.Icon {...props}
                            icon="book-multiple" />}
                            style={styles.itemsList}
                            onPress={handlePress} title="Materiais" />
                        <List.Item left={props => <List.Icon {...props}
                            icon="numeric-9-plus-box-multiple" />}
                            style={styles.itemsList}
                            onPress={handlePress} title="Notas" />
                        <List.Item left={props => <List.Icon {...props}
                            icon="calendar-multiple" />}
                            style={styles.itemsList}
                            onPress={handlePress} title="Preseça" />
                    </List.Accordion>
                </List.Section>


                <List.Section style={{ marginHorizontal: 30, }}>
                    <List.Accordion
                        title="Inglês "
                        left={props => <List.Icon {...props} icon="ab-testing" />}
                        style={{
                            backgroundColor: '#b38a0e',
                            borderBottomWidth: 5
                        }}
                        onPress={handlePress}
                        description="Noturno"
                    >
                        <List.Item
                            left={props => <List.Icon {...props}
                                icon="book-multiple" />}
                            style={styles.itemsList}
                            onPress={handlePress}
                            title="Materiais" />
                        <List.Item
                            left={props => <List.Icon {...props}
                                icon="numeric-9-plus-box-multiple" />}
                            style={styles.itemsList}
                            onPress={handlePress}
                            title="Notas" />
                        <List.Item
                            left={props => <List.Icon {...props}
                                icon="calendar-multiple" />}
                            style={styles.itemsList}
                            onPress={handlePress}
                            title="Presença" />
                    </List.Accordion>
                </List.Section>


            </Animated.View>
        </KeyboardAvoidingView>
    );
};
