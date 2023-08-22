import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default function CustomIconButton({icon, onPress, style, home}) {
  return (
    <TouchableOpacity
      style={
        style == true ? styles.detail_icon_container : styles.icon_container
      }
      onPress={onPress}>
      <Icon style={styles.icon} name={icon} size={25} color="#1D1E20" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon_container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6FA',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  detail_icon_container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'wwhite',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  icon: {
    padding: 10,
  },
});
