import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNavigator from './src/screens/navigatorScreens/BottomTabNavigator';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import AppScreen from './src/screens/navigatorScreens/AppScreen';
import AuthStackScreen from './src/screens/navigatorScreens/AuthStackScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './src/context/AuthContext';
import { navigationRef } from './src/RootNavigation';
import { ActivityIndicator, View } from 'react-native';
import todoApi from './src/api/todoApi'

export default App = () => {
  const RootStack = createStackNavigator();


  const [isLoading, setIsLoading] = useState(true);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);

      try {
        let thetoken = await AsyncStorage.getItem('token');
        console.log('token :');
        console.log(thetoken);
        setUserToken(thetoken);
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      setIsLoading(false);

    }, 1000);
  }, []);


  const authContext = React.useMemo(() => {
    return {
      signIn: async ({ email, password }) => {

        setIsButtonLoading(true);
        try {
          console.log('trying to sign in')
          const response = await todoApi.post('/signin', { email, password });
          // await AsyncStorage.setItem('token', response.data.token);
          setUserToken(response.data.token);
          console.log(response.data.token);
          AsyncStorage.setItem('token', response.data.token)
        } catch (error) {
          console.log(error.message);
          setIsButtonLoading(false);
        }
        console.log('admin login')
        setIsButtonLoading(false);
      },
      signUp: () => {
        // setIsLoading(false);
        setUserToken('admin');
      },
      signOut: () => {
        console.log(userToken);
        AsyncStorage.removeItem('token');
        setUserToken(null);
      },
      goWithoutSignIn2: () => {
        setUserToken('guest')
        console.log('guest login')
        // AsyncStorage.setItem('tokenType', 'guest')
      },
      isBtnLoading: isButtonLoading
    }
  }, [])



  const RootStackScreen = () => (
    <RootStack.Navigator screenOptions={{ headerShown: false }}   >
      {!userToken ? (
        <RootStack.Screen name="Auth" component={AuthStackScreen} options={{ animationEnabled: false, headerShown: false }} />
      ) : (
        <RootStack.Screen name="App" component={AppScreen} options={{ animationEnabled: false }} />
      )}
    </RootStack.Navigator>
  )

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer ref={navigationRef}>
          <RootStackScreen />
        </NavigationContainer>
      </ApplicationProvider>
    </AuthContext.Provider>
  )
}