import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import HomeTopHeader from '../components/HomeTopHeader';
import CorrectPhoto from '../assets/correct_photo.svg';
import Footer from '../components/Footer';

export default function ConfirmedPage({navigation}) {
  return (
    <View style={styles.container}>
      <HomeTopHeader onPress={() => navigation.pop()} />
      <View style={styles.inner_container}>
        <CorrectPhoto width="100%" height={280} />
        <View style={{flex: 1}}>
          <Text style={styles.title}>Order Confirmed!</Text>
          <Text style={styles.description}>
            Your order has been confirmed, we will send you confirmation email
            shortly.
          </Text>
        </View>
        <TouchableOpacity style={styles.button_container} onPress={() => navigation.navigate('HomeStack')}>
          <Text style={styles.button_text}>Go to Orders</Text>
        </TouchableOpacity>
      </View>
      <Footer text="Continue Shopping" onPress={() => navigation.navigate('HomeStack')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inner_container: {
    marginTop: 40,
    flex: 1,
  },

  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
    marginTop: 40,
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '400',
    marginHorizontal: 25,
  },
  button_container: {
    marginBottom: 20,
    paddingVertical: 10,
    backgroundColor: '#F5F5F5',
    marginHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  button_text: {fontSize: 18, color: '#8F959E'},
});
