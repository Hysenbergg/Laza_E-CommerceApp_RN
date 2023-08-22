import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';
import CustomInput from '../components/CustomInput';

export default function NewPasswordPage({navigation}) {
    const [password, setPassword] = useState('HJ@#9783kja');
    const [newPassword, setNewPassword] = useState('HJ@#9783kja');

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle title="Verification Code" onPress={() => navigation.pop()} />
        <View style={styles.input_container}>
        <CustomInput title='Password' value={password} onChangeText={setPassword} />
        <CustomInput title='Confirm Password' value={newPassword} onChangeText={setNewPassword} />
        </View>
      <View style={styles.footer_container}>
        <Text style={styles.footer_top_text}>
          Please write your new password.
        </Text>
        <Footer
          text="Reset Password"
          onPress={() => navigation.navigate('Signin')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  input_container: {
    marginBottom: 50
  },
  footer_container: {
    alignItems: 'center',
  },
  footer_top_text: {
    textAlign: 'center',
    fontSize: 15,
    marginHorizontal: 50,
    color: '#8F959E',
    marginBottom: 20,
  },
});
