import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#182e45',
        borderColor: 'black',
        paddingHorizontal: 20
    },
    containerImg: {
        flex: 0.7,
        justifyContent: 'center',
        borderRadius: 100,
        height: 100,
        width: 100,
        marginHorizontal: '36%'
    },
    ImgUser: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderColor: 'black',
        borderBottomWidth: 5
    },

    itemsList: {
        backgroundColor: "#dad8cc",
        margin: 4,
    },
    buttonSair: {
        marginTop: StatusBar.currentHeight + 10,
        alignSelf: "flex-end"
    }


});

//#a69e14