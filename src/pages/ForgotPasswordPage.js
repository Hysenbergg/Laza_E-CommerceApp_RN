import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';
import CustomInput from '../components/CustomInput';

export default function ForgotPasswordPage({navigation}) {
  const [email, setEmail] = useState('bill.sanders@example.com');

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle title="Forgot Password" onPress={() => navigation.pop()} />
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={require('../assets/forgot-password.png')}
        />
      </View>
      <View style={styles.input_container}>
        <CustomInput
          title="Email Address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.footer_container}>
        <Text style={styles.footer_top_text}>
          Please write your email to receive a confirmation code to set a new
          password.
        </Text>
        <Footer text="Confirm Mail" onPress={() => navigation.navigate('VerificationCode')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image_container: {
    alignItems: 'center',
    marginVertical: 50,
  },
  image: {
    width: 250,
    height: 200,
  },
  input_container: {
    flex: 1,
    marginTop: 20,
  },
  footer_container: {
    alignItems: 'center',
  },
  footer_top_text: {
    textAlign: 'center',
    fontSize: 15,
    marginHorizontal: 50,
    color: '#8F959E',
    marginBottom: 20
  },
});
