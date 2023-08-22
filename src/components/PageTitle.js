import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PageTitle({title, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon_container} onPress={onPress}>
        <Icon
          style={styles.icon}
          name="long-arrow-left"
          size={25}
          color="black"
        />
      </TouchableOpacity>
      <View style={styles.title_container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  icon_container: {
    top: 35,
    left: 10,
    marginBottom: 45,
    justifyContent: 'center',
    backgroundColor: '#F5F6FA',
    width: 50,
    height: 50,
    alignItems: 'center',
    borderRadius: 50
  },
  icon: {
    padding: 10,
  },
  title_container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black'
  }
});
