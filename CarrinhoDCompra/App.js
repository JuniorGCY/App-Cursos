import React from 'react';
import { StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes';
import CarProvider from './src/contexts/CartContent';

export default function App() {
  return (
    <NavigationContainer>
      <CarProvider>
      <StatusBar backgroundColor='#FAFAFA' barStyle='dark-content' />
      <Routes />
      </CarProvider>
    </NavigationContainer>
  )
}
