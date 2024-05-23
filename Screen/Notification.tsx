import { View, Text, StyleSheet } from "react-native"
import MainContainer from "../components/MainContainer";
import { Platform, TouchableOpacity, StatusBar, FlatList, ActivityIndicator } from "react-native";
import { css } from '../objects/commonCSS';
import React, { useEffect, useState } from "react";
import Feather from 'react-native-vector-icons/Feather';
import Login from "./Login";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNFetchBlob from "rn-fetch-blob";

const Notification = ({ navigation }: any) => {
    // const [dataProcess, setDataProcess] = useState(false);
    // const [messages, setMessages] = useState<Message[]>([]);

    // type Message = {
    //     id: string;
    //     userName: string;
    //     time: string;
    //     frequency: string;
    //     ticket: string;
    //     oldWeight: string;
    //     newWeight: string;
    // }

    // useEffect(() => {
    //     checktoken();
    //     fetchData();
    // }, []);

    // const checktoken = async () => {
    //     AsyncStorage.getItem('fcmtoken').then((value) => {
    //         console.log('Token:' + value);
    //     });
    // };

    // const fetchData = async () => {
    //     let link =await AsyncStorage.getItem('IpAddress');
    //     setDataProcess(true)
    //     try {
    //         const storedUsername = await AsyncStorage.getItem('username');
    //         const res = await RNFetchBlob.config({ trusty: true })
    //             .fetch('POST', 'https://'+link+'/api/GetTodayLog', {
    //                 "Content-Type": "application/json"
    //             }, JSON.stringify({ "Username": storedUsername }));

    //         const responseData = await res.json();
    //         const formattedMessages = responseData.map((item: any) => {
    //             const date = new Date(item.date);
    //             const hours = date.getHours() % 12 || 12; 
    //             const minutes = date.getMinutes().toString().padStart(2, '0'); 
    //             const ampm = date.getHours() >= 12 ? 'PM' : 'AM'; 

    //             return {
    //                 id: item.logID.toString(),
    //                 userName: item.user || 'null',
    //                 time: `${hours}:${minutes} ${ampm}`, 
    //                 frequency: item.status || 'null',
    //                 ticket: item.ticket || 'null',
    //                 oldWeight: item.from || 'null',
    //                 newWeight: item.body || 'null',
    //             };
    //         });
    //         setMessages(formattedMessages);
    //     }
    //     catch (err) {
    //         console.error(err);
    //     }
    //     setDataProcess(false)
    // };

    // const renderItem = ({ item }: { item: Message }) => (
    //     <View style={styles.List}>
    //         <View style={styles.Left}>
    //             <Feather name="alert-circle" color={'#000000'} size={40} />
    //         </View>
    //         <View style={styles.Right}>
    //             <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    //                 <Text style={styles.UserName}>{item.userName}</Text>
    //                 <Text style={styles.Time}>{item.time}</Text>
    //             </View>
    //             <Text style={styles.Message}>
    //                 {item.userName} changed <Text style={styles.Ticket}>{item.frequency}</Text> weight from{' '}
    //                 <Text style={styles.AlertText}>{item.oldWeight} kg</Text> to{' '}
    //                 <Text style={styles.AlertText}>{item.newWeight} kg</Text> on Ticket{' '}
    //                 <Text style={styles.Ticket}>{item.ticket}</Text>
    //             </Text>
    //         </View>
    //     </View>
    // );

    return (
        <MainContainer>
            <StatusBar animated={true} backgroundColor="#FFFFFF" barStyle={'dark-content'} />
            {Platform.OS === "android" ? (
                <View style={[css.mainView, { backgroundColor: 'transparent' }]}>
                    <TouchableOpacity style={{ paddingLeft: 20, }} onPress={() => { navigation.navigate(Login) }}>
                        <FontAwesome name="arrow-left" size={25} color={"black"} />
                    </TouchableOpacity>
                    <View style={css.HeaderView}>
                        <Text style={css.PageName}>Notification</Text>
                    </View>
                </View>
            ) : (
                <View style={[css.mainView]}>
                    <TouchableOpacity style={{ paddingLeft: 20, }} onPress={() => { navigation.navigate(Login) }} >
                        <FontAwesome name="arrow-left" size={25} color={"white"} />
                    </TouchableOpacity>
                    <View style={css.HeaderView}>
                        <Text style={css.PageName}>Notification</Text>
                    </View>
                </View>
            )}
            {/* {dataProcess == true ? (
                <View style={[css.container]}>
                    <ActivityIndicator size="large" />
                </View>
            ) : (
                <View style={styles.Notification}>
                    <Text style={{ color: "#646464", fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>Notification</Text>
                    <FlatList
                        data={messages}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={<Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#646464', }}>No Data Available</Text>}
                    />
                </View>
            )} */}
        </MainContainer>
    )
}

export default Notification;

const styles = StyleSheet.create({
    Notification: {
        width: '90%',
        flex: 1,
        marginHorizontal: '5%',
        marginTop: 20,
    },
    List: {
        marginVertical: '2%',
        flexDirection: 'row',
    },
    Left: {
        padding: 10,
        flex: 1
    },
    Right: {
        padding: 5,
        flex: 6,
    },
    UserName: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    Time: {
        color: '#646464',
        fontSize: 12,
        alignSelf: 'center',
    },
    Message: {
        color: '#646464',
        fontSize: 14,
    },
    AlertText: {
        fontSize: 14,
        color: 'red'
    },
    Ticket: {
        fontSize: 14,
        color: 'blue'
    }
})