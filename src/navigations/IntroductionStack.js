import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages import
import FirstPage from '../pages/FirstPage';
import SecondPage from '../pages/SecondPage';
import StartedPage from '../pages/StartedPage';
import SignupPage from '../pages/SignupPage';
import SigninPage from '../pages/SigninPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import VerificationCodePage from '../pages/VerificationCodePage';
import NewPasswordPage from '../pages/NewPasswordPage';

const Stack = createNativeStackNavigator();

export default function IntroductionStack() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="First" component={FirstPage} />
        <Stack.Screen name="Second" component={SecondPage} />
        <Stack.Screen name="Started" component={StartedPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="Signin" component={SigninPage} />
        <Stack.Screen name='ForgotPassword' component={ForgotPasswordPage} />
        <Stack.Screen name='VerificationCode' component={VerificationCodePage} />
        <Stack.Screen name='NewPassword' component={NewPasswordPage} />
    </Stack.Navigator>
  );
}