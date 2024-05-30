import { StyleSheet, Dimensions } from "react-native";
import { DefaultTheme } from 'react-native-paper';

const whiteTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
    },
};

export default whiteTheme;

export const styles = StyleSheet.create({
    fonth1: {
        fontWeight: "bold",
        fontSize: 20,
        alignSelf: "center",
        color: '#000000'
    },
    fonth2: {
        fontWeight: "bold",
        fontSize: 16,
        alignSelf: "center",
        color: '#000000',
        letterSpacing: 0.25,
        marginBottom: 5,
    },
    fonth3: {
        alignSelf: "center",
        fontSize: 12,
        color: '#000000'
    },
    Header: {
        flex: 2,
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: '#000000'
    },
    fontLogin: {
        marginLeft: 10,
        fontWeight: "bold",
        fontSize: 20,
        alignSelf: "flex-start",
        color: '#000000'
    },
    fontsmall: {
        marginLeft: 10,
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 12,
        alignSelf: "flex-start",
        color: '#000000'
    },
    blackline: {
        width: "90%",
        height: 1,
        backgroundColor: "black",
        alignSelf: 'center',
        marginBottom: 5,
    },
    InputRange: {
        width: "90%",
        alignSelf: "center",
    },
    Textinput: {
        alignSelf: "center",
        marginTop: 20,
        width: "100%",
        borderRadius: 5,
    },
    Textinput_NoMargin:
    {
        alignSelf: "center",
        width: "100%",
        borderRadius: 5,
    },
    ButtonLogin: {
        alignSelf: "center",
        backgroundColor: "#D9D9D9",
        marginBottom: 10,
        borderRadius: 5,
        width: "80%",
        height: "10%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    ButtonLogin_NoMargin: {
        alignSelf: "center",
        backgroundColor: "#D9D9D9",
        marginBottom: 10,
        borderRadius: 5,
        width: "80%",
        height: "10%",
        alignItems: "center",
        justifyContent: "center",
    },
})

export const css = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    mainView: {
        width: '100%',
        height: Dimensions.get("screen").height / 100 * 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#7174F8",
    },
    HeaderView: {
        flex: 1,
        padding: 10,
        gap: 4,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginHorizontal: 4,
    },
    PageName: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold",
    },
})