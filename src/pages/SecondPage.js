import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../config/colors';

export default function SecondPage({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/app-man-photo.png')} />
      <View style={styles.sex_selection_container}>
        <Text style={styles.title}>Look Good, Feel Good</Text>
        <Text style={styles.content}>
          Create your individual & unique style and look amazing everyday.
        </Text>
        <View style={styles.gender_button_container}>
          <TouchableOpacity style={styles.gender_button} onPress={() => navigation.navigate('Started')}>
            <Text style={styles.gender_text}>Men</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.gender_button, {backgroundColor: Colors.primary}]}
            onPress={() => navigation.navigate('Started')}>
            <Text style={[styles.gender_text, {color: 'white'}]}>Women</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.skip_button} onPress={() => navigation.navigate('Started')}>
          <Text style={styles.skip_button_text}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  sex_selection_container: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 30,
    right: 0,
    left: 0,
    backgroundColor: 'white',
    marginHorizontal: 15,
    padding: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
  },
  content: {
    textAlign: 'center',
    fontSize: 15,
    marginHorizontal: 15,
    color: '#8F959E',
  },
  gender_button_container: {
    flexDirection: 'row',
  },
  gender_button: {
    width: 150,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: '#F5F6FA',
    height: 60,
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  gender_text: {
    color: '#8F959E',
    fontSize: 17,
  },
  skip_button: {
    marginBottom: 20,
  },
  skip_button_text: {
    fontSize: 18,
    color: '#8F959E',
  },
});
