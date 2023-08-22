import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import SigninInputComponent from '../components/SigninInputComponent';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';

export default function SigninPage({navigation}) {
  const [username, setUsername] = useState('Esther Howard');
  const [password, setPassword] = useState('HJ@#9783kja');
  const [value, setValue] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <PageTitle title="Welcome" onPress={() => navigation.pop()} />
        <Text style={styles.second_title}>
          Please enter your data to continue
        </Text>
      </View>
      <View>
        <SigninInputComponent
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
        <TouchableOpacity
          style={styles.forget_password_btn}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forget_btn_text}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={{marginTop: 35, marginHorizontal: 20}}>
          <CustomSwitch
            title="Remember Me"
            value={value}
            onValueChange={setValue}
          />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.sign_button}>
          <Text style={styles.button_text}>
            By connecting your account confirm that you agree with our{' '}
            <Text style={styles.button_inner_text}>Term and Condition</Text>
          </Text>
        </TouchableOpacity>
        <Footer text="Login" onPress={() => navigation.navigate('AppDrawer')} />
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
  second_title: {alignSelf: 'center', marginTop: -5, fontSize: 15},
  forget_password_btn: {alignItems: 'flex-end', marginRight: 20, marginTop: 20},
  forget_btn_text: {
    color: 'red',
    fontSize: 15,
  },
  sign_button: {
    backgroundColor: 'white',
    marginBottom: 25,
    marginHorizontal: 20,
  },
  button_text: {
    fontSize: 15,
    color: '#8F959E',
    textAlign: 'center',
  },
  button_inner_text: {
    color: 'black',
    fontWeight: 'bold',
  },
});
