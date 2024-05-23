import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, KeyboardAvoidingView, StatusBar, NativeModules } from 'react-native';
import MainContainer from '../components/MainContainer';
import { styles } from '../objects/commonCSS';
import { TextInput, HelperText } from 'react-native-paper';
import RNFetchBlob from "rn-fetch-blob";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URLAccess } from '../objects/URLAccess';
import Notification from './Notification';
import Snackbar from 'react-native-snackbar';
import KeyboardAvoidWrapper from '../components/KeyboardAvoidWrapper';
import { GetFCMToken } from '../components/pushNotification';
import Icon from 'react-native-vector-icons/Feather';

export interface ApiResponse {
    ipAddress: string;
    isSuccess: string;
}


const Login = () => {
    const navigation = useNavigation();
    const [ishide, setishide] = useState(false);
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const passwordInputRef = useRef<any>(null);
    const [loading, setLoading] = React.useState(false);
    const [usernameHelperText, setusernameHelperText] = useState(false);
    const [passwordHelperText, setpasswordHelperText] = useState(false);

    const [branch, setbranch] = useState("");
    const [IPaddress, setIPadress] = useState("");

    // Refresh page When the user logout 
    useEffect(() => {
        // console.log();
        const unsubscribe = navigation.addListener('focus', () => {
            setusername('');
            setpassword('');
        });
        return unsubscribe;
    }, [navigation]);

    const checkEmpty = () => {
        let emtpy = false;
        if (username === '') {
            setusernameHelperText(true)
            emtpy = true;
        } else {
            setusernameHelperText(false)
        }

        if (password === '') {
            setpasswordHelperText(true)
            emtpy = true;
        } else {
            setpasswordHelperText(false)
        }

        if (!emtpy) {
            LoginApi();
        }
    }

    useEffect(() => {
        (async()=>{
            let FCMToken = await AsyncStorage.getItem("fcmtoken");
            console.log(FCMToken);
        })();
        if (username) {
            setusernameHelperText(false)
        }
        if (password) {
            setpasswordHelperText(false)
        }
    },[])

    const LoginApi = async () => {
        setLoading(true)
        RNFetchBlob.config({ trusty: true }).fetch("POST","https://192.168.1.233:8080/domain/mobile/userFunction.php", 
        { "Content-Type": "application/json" },
            JSON.stringify({
                "login": "1",
                "username": username,
                "password": password,
                "tokenValue": "sss"
            })).then(async (res) => {
                Snackbar.show({
                    text: res.json().status,
                    duration: Snackbar.LENGTH_LONG
                })
                // if (await res.json().status == "1") {
                //     await AsyncStorage.setItem('username', username);
                //     await AsyncStorage.setItem('password', password);
                //     await AsyncStorage.setItem('firstLauncher', 'false')
                //     navigation.navigate(Notification as never)
                // }else {
                //     Snackbar.show({
                //         text: "Login Fail, Please Check Your credential and try again later.",
                //         duration: Snackbar.LENGTH_LONG
                //     })
                // }
                setLoading(false)
            }).catch(err => {
                Snackbar.show({
                    text: err.message,
                    duration: Snackbar.LENGTH_LONG
                })
                setLoading(false)
            })
    }

    return (
        <MainContainer>
            <StatusBar animated backgroundColor={'white'} barStyle={'dark-content'}/>
                <KeyboardAvoidWrapper>
                {/* Header */}
                <View style={{ height: Dimensions.get("screen").height / 100 * 90 }}>
                    <View style={{ flex: 0.3, flexDirection: "row" }}>
                        <Image source={require('../assets/logo.png')} style={{ flex: 2, height: Dimensions.get("screen").height / 100 * 15, width: 120, resizeMode: 'contain', alignSelf: "center" }} />
                        <Text style={styles.Header}>DOMAIN CONNECT</Text>
                    </View>

                    {/*End Header */}
                    <View style={{ flex: 1 }}>
                        <View style={{ justifyContent: "flex-end", width: "90%", alignSelf: "center", marginTop: 30 }}>
                            <Text style={styles.fontLogin}>Login</Text>
                            <Text style={styles.fontsmall}>Enter Your Credential to Log In</Text>
                        </View>
                        {/* Login Information */}
                        <View style={styles.InputRange}>
                            <TextInput
                                style={styles.Textinput}
                                mode="outlined"
                                label={'UserName'}
                                value={username}
                                onChangeText={setusername}
                                returnKeyType="next"
                                onSubmitEditing={() => passwordInputRef.current?.focus()}
                            />
                            {usernameHelperText && <HelperText type="error">User Name can't be empty</HelperText>}
                        </View>
                        <View style={styles.InputRange}>
                            <TextInput
                                ref={passwordInputRef}
                                style={styles.Textinput}
                                secureTextEntry={ishide}
                                mode="outlined"
                                label={'Password'}
                                value={password}
                                onChangeText={setpassword}
                            />
                            {passwordHelperText && <HelperText type="error">Password can't be empty</HelperText>}
                        </View>
                        <TouchableOpacity style={styles.ButtonLogin} onPress={() => { checkEmpty() }}>
                            <Text style={styles.fonth2}>
                                Log In
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ justifyContent: "flex-end" }}>
                        <View style={styles.blackline} />
                        <TouchableOpacity>
                            <Text style={styles.fonth2}>Don't have an account? Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </KeyboardAvoidWrapper>

        </MainContainer>
    );
}

export default Login;
