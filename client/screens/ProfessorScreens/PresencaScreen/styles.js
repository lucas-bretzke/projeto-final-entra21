import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerList: {
        flex: 1
    },
    containerAcc: {
        marginHorizontal: 30,
        marginBottom: 20,
        backgroundColor: '#b5890c',
        borderRadius: 20,
        borderBottomWidth: 8,
    },
    imgUser: {
        height: 100,
        width: 100,
        borderRadius: 100,
        alignItems: 'center',
        marginHorizontal: 130

    },
    input1: {
        backgroundColor: 'white',
        padding: 10,
        margin: 3,
        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: 15
    },
    input: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        width: 50,
        marginLeft: 2,
    },
    inputLink: {
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 5
    },
    ViewInpP: {
        backgroundColor: '#b5930c',
        padding: 5
    },
    ViewInp: {
        padding: 10,
        backgroundColor: '#396361',
        borderWidth: 1,
    },

    ButtonSlvr: {
        alignItems: 'center',
        padding: 8,
    },
    materiaIcone: {
        textAlign: "center",
        marginBottom: 30
    },
    alunoContainer: {
        flexDirection: "row",
        padding: 10,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: "#000",
        marginHorizontal: 20,        
        justifyContent: "space-between",
        alignItems: "center"
    },
    checkbox: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#000"
    },
    cabecalho: {
        flexDirection: "row",   
        marginHorizontal: 20,   
        justifyContent: "space-between"
    },
    cabecalhoText: {
        flex: 1,
        borderWidth: 1,
        textAlign: "center",
        borderColor: "#000"
    },
    textEmpty: {
        color: "white",
        textAlign: "center"
    }
});