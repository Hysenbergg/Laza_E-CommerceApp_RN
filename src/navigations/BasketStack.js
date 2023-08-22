import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BasketPage from '../pages/BasketPage';
import AddressDetailPage from '../pages/AddressDetailPage';
import PaymentDetailPage from '../pages/PaymentDetailPage';
import AddNewCardPage from '../pages/AddNewCardPage';
import ConfirmedPage from '../pages/ConfirmedPage';

const Stack = createNativeStackNavigator();

export default function BasketStack() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name='Basket' component={BasketPage} />
        <Stack.Screen name='AddressDetail' component={AddressDetailPage} />
        <Stack.Screen name='PaymentDetail' component={PaymentDetailPage} />
        <Stack.Screen name='AddNewCard' component={AddNewCardPage} />
        <Stack.Screen name='Confirmed' component={ConfirmedPage} />
    </Stack.Navigator>
  );
}
