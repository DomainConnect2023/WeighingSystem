import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login, { ApiResponse } from './Screen/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import whiteTheme from './objects/commonCSS';
import { NativeModules, Platform, SafeAreaView } from 'react-native';
import Notification from './Screen/Notification';
import 'react-native-gesture-handler';
import { GetFCMToken, NotificationListner, requestUserPermission } from './components/pushNotification';
import { URLAccess } from './objects/URLAccess';
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [branch, setbranch] = useState("");
  const [IPaddress, setIPadress] = useState("");
  
  useEffect(() => {
    requestUserPermission();
    GetFCMToken();
    NotificationListner();
  }, []);

  useEffect(() => {
    (async()=>{
      await getIPAdd();
  })();
    
  }, []);

  const getIPAdd = async() =>{
    try{
      if(Platform.OS === 'ios'){
        let url = (URLAccess.getIPAddress+"com.Weighingapp"+"&branch="+branch);
        let result = await RNFetchBlob.config({trusty:true}).fetch('get',url);
        let responses: ApiResponse = JSON.parse(result.data);
        setIPadress(responses.ipAddress);
        AsyncStorage.setItem("IpAddress",responses.ipAddress);

        console.log("Login API: " + responses.ipAddress);
      }
      else{
        let url =(URLAccess.getIPAddress+NativeModules.RNDeviceInfo?.bundleId+"&branch="+branch);
        let result = await RNFetchBlob.config({trusty:true}).fetch('get',url);
        let responses: ApiResponse = JSON.parse(result.data);
        setIPadress(responses.ipAddress);
        AsyncStorage.setItem("IpAddress",responses.ipAddress);

        console.log("Login API: " + responses.ipAddress);
      }
    }
    catch (error) {
        console.error(error);
    }
  };
  
  return (
    <PaperProvider theme={whiteTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false, navigationBarColor: "white" }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Notification" component={Notification} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}


export default App; 