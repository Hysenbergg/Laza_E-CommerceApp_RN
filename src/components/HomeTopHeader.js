import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeTopHeader({title, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon_container} onPress={onPress}>
        <Icon
          style={styles.icon}
          name="long-arrow-left"
          size={22}
          color="black"
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.empty_container}></View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 45,
        alignItems: 'center',
        marginBottom: 15
    },
    icon_container: {
        width: 45,
        height: 45,
        backgroundColor: '#F5F6FA',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    title: {
        fontSize: 18,
        color: 'black',
        fontWeight: '700'
    },
    empty_container: {
        width: 45,
        height: 45,
    }
});
