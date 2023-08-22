import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../config/colors';

export default function Footer({text, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.button_text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    width: '100%',
    height: 75,
    alignItems: 'center',
  },
  button: {
    marginTop: 15,
  },
  button_text: {
    color: 'white',
    fontSize: 17
  }
});
