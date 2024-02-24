// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './routes/login';
import HeaderWithButton from './components/header';
import HomePage from './routes/HomePage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        
        screenOptions={{
          
          header: () => <HeaderWithButton />,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomePage" component={HomePage} />
        {/* Adicione outras rotas conforme necessário */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;