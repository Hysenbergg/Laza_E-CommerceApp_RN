import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomInput from './CustomInput';

export default function SigninInputComponent({username, setUsername, password, setPassword}) {
  
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
    </View>
  );
}

const styles = StyleSheet.create({});
