import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f73',
        justifyContent: "center",
        alignItems: "center",

    },

    containerLogo: {
        flex: 1,
        justifyContent: "center",
    },

    ViewInput: {
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 20,
    },

    container2: {
        backgroundColor: '#003f73',
        width: '88%',
        flex: 1,
        borderRadius: 7,
        padding: 0,

    },

    input: {
        width: '86%',
        backgroundColor: 'white',
        borderRadius: 3,
        padding: 10,
        marginLeft: 10,
    },

    textoBotao: {
        color: 'white',
        fontSize: 15,
        padding: 5,
        textAlign: "center"
    },

    textLink: {
        fontSize: 12,
    },

    botao1: {
        padding: 2,
        width: '34%',
        marginLeft: 10,
    },



    botao3: {
        backgroundColor: 'rgb(41, 135, 7)',
        padding: 10,
        marginHorizontal: 100,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

});