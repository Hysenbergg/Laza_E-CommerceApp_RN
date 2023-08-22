import React from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';

export default function CustomSwitch({ title, value, onValueChange}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', marginTop: 5},
  title: {
    flex: 1,
    fontSize: 15,
    color: '#1D1E20',
    fontWeight: '600'
  }
});
