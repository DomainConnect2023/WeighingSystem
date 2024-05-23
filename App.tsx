import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Screen/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import Notification from './Screen/Notification';
import 'react-native-gesture-handler';
import { GetFCMToken, NotificationListner, requestUserPermission } from './components/pushNotification';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  useEffect(() => {
    requestUserPermission();
    GetFCMToken();
    NotificationListner();
  }, []);
  
  return (
    <PaperProvider>
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