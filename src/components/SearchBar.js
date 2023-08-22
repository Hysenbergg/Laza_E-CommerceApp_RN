import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchBar({search, setSearh}) {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name="search" size={20} color="#8F959E" />
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={setSearh}
        placeholder="Search..."
        placeholderTextColor="#8F959E"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
    marginLeft: 20,
  },
  icon: {
    margin: 15,
  },
  input: {
    flex: 1,
    fontSize: 15
  },
});
