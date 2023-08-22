import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';

export default function StartedPage({navigation}) {
  const SocialButton = ({icon, text, color}) => {
    return (
      <TouchableOpacity
        style={[styles.icon_button_container, {backgroundColor: color}]}>
        <Icon name={icon} size={18} color="white" />
        <Text style={styles.icon_text}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
      }}>
      <PageTitle title="Let's Get Started" onPress={() => navigation.pop()} />
      <View style={styles.icons_container}>
        <SocialButton icon="facebook" text="Facebook" color="#4267B2" />
        <SocialButton icon="twitter" text="Twitter" color="#1DA1F2" />
        <SocialButton icon="google" text="Google" color="#EA4335" />
      </View>
      <View>
        <TouchableOpacity style={styles.sign_button} onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.button_text}>Already have an account? <Text style={styles.button_inner_text}>Signin</Text></Text>
        </TouchableOpacity>
        <Footer text="Create an Account" onPress={() => navigation.navigate('Signup')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icons_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon_button_container: {
    flexDirection: 'row',
    width: 370,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  icon_text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  sign_button: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 25
  },
  button_text: {
    fontSize: 15,
    color: '#8F959E'
  },
  button_inner_text: {
    color: 'black',
    fontWeight: 'bold',
  }
});
