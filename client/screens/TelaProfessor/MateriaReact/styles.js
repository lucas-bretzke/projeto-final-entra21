import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    containerImg: {
        flex: 0.6,
        justifyContent: "center",
        height: 100,
        width: 100
    },
    containerList: {
        flex: 1
    },
    containerAcc: {
        marginHorizontal: 20,
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
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 15,
        borderWidth: 1,
        marginBottom: 10
    },
    ViewInp: {
        padding: 10,
        backgroundColor: '#182e45',
        borderWidth: 2

    },

    ViewBtn: {
        marginHorizontal: 110,
        borderRadius: 20,
        backgroundColor: 'red',
        alignItems: 'center',
        marginTop: 3,
        marginBottom: 3

    },
    ButtonSlvr: {
        alignItems: 'center',
        padding: 0,

    },

    text: {
        margin: 10,

    },
});