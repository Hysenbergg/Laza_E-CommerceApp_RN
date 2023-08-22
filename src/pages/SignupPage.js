import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Switch} from 'react-native';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';
import SignUpInputComponent from '../components/SignUpInputComponent';
import CustomSwitch from '../components/CustomSwitch';

export default function SignupPage({navigation}) {
  const [username, setUsername] = useState('Esther Howard');
  const [password, setPassword] = useState('HJ@#9783kja');
  const [email, setEmail] = useState('bill.sanders@example.com');
  const [value, setValue] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle title="Sign Up" onPress={() => navigation.pop()} />
      <View>
        <SignUpInputComponent
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          email={email}
          setEmail={setEmail}
        />
        <View style={{marginTop: 35, marginHorizontal: 20}}>
          <CustomSwitch
            title="Remember Me"
            value={value}
            onValueChange={setValue}
          />
        </View>
      </View>
      <Footer text="Sign Up" onPress={() => navigation.navigate('Signin')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
});
//<CustomSwitch value={value} setValue={val => setValue(!val)} />
