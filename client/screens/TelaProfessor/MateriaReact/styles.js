import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

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
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        width: 50,
        marginLeft: 2
    },
    ViewInp: {
        padding: 10,
        backgroundColor: '#396361',
        borderWidth: 1,
    },

    ViewBtn: {
        marginHorizontal: 110,
        borderRadius: 20,
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
    textDaPre: {
        flex: 1,
        padding: 3,
        margin: 3,
        marginRight: 90,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
    }
});