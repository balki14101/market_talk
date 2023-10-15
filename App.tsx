import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import SplashScreen from './src/screens/Splashscreen';
import WelcomeScreen from './src/screens/Welcomescreen';
import OAuthScreen from './src/screens/OAuthscreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="OAuth" component={OAuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
