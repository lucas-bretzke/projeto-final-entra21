import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#182e45",
    },
    imagemCoruja: {
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 150,
        marginVertical: 30,
        alignSelf: "center"
    },
    botao: {
        alignItems: 'center',
        justifyContent: "center",
        width: 250,
        height: 50,
        backgroundColor: "#F5FEFE",
        borderRadius: 20,
        paddingLeft: 10,
        margin: 15,
    },
    containerAula: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
    },    
    inputLink: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5
    },
    ViewInp: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5
    },
    textEmpty: {
        color: "white",
        textAlign: "center"
    }
})