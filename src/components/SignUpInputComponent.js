import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomInput from './CustomInput';

export default function SignUpInputComponent({username, setUsername, password, setPassword, email, setEmail}) {
  
  return (
    <View>
      <CustomInput
        title="Username"
        value={username}
        onChangeText={setUsername}
        icon="check"
      />
      <CustomInput
        title="Password"
        value={password}
        onChangeText={setPassword}
        icon="check"
      />
      <CustomInput
        title="Email Address"
        value={email}
        onChangeText={setEmail}
        icon="check"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
