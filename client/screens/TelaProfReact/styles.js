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
        marginHorizontal: 30,
        marginBottom: 20,
        backgroundColor: '#b5890c',
        borderRadius: 20,
        borderWidth: 0
    },
    imgUser: {
        height: 130,
        width: 130,
        borderRadius: 100,
        alignItems: 'center',
        marginHorizontal: 115

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
        backgroundColor: '#182e45'
    },

    ViewBtn: {
        marginHorizontal: 110,
        borderRadius: 20,
        backgroundColor: 'red',
        alignItems: 'center',
        marginTop: 3,
        marginBottom: 3

    },

    text: {
        margin: 10,
        color: 'white'

    },
});