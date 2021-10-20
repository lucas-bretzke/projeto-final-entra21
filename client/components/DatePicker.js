import React, { useState } from 'react';
import { View, Platform, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Fontisto } from '@expo/vector-icons';
import moment from "moment";

export function DatePicker(props) {
    const [date, setDate] = useState(props.date);        
    const [showDate, setShowDate] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDate(Platform.OS === 'ios');        
        props.setDate(currentDate);
    };

    const dateString = moment(props.date).format("DD/MM/YYYY");

    return (
        <>
            <TouchableOpacity onPress={() => setShowDate(true)} style={styles.button}>
                <Text style={styles.buttonText}>{dateString}</Text>
                <Fontisto name="date" size={24} color="black" />
            </TouchableOpacity>
            {showDate && (
                <DateTimePicker
                    testID="datePicker"
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChangeDate}
                />
            )}
        </>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#f5f5f5",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 10,
        marginVertical: 20
    },
    buttonText: {
        color: "#666"
    }
});