import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomInput({title, value, onChangeText, icon}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inner_container}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize='none'
        />
        <Icon name={icon} size={20} color="#34C358" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    color: '#8F959E',
    fontSize: 13,
  },
  inner_container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginBottom: 20
  },
  input: {flex: 1, color: '#1D1E20', fontWeight: 'bold', fontSize: 17},
});
