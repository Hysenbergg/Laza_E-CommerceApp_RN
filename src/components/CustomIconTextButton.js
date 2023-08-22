import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomIconTextButton({onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="edit" size={16} color='white' />
      <Text style={styles.button_text}>Add Review</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FF7043',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 120,
    height: 40,
    justifyContent: 'center',
  },
  button_text: {
    color: 'white',
    marginLeft: 5
  }
});
