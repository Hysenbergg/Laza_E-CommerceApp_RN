import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default function ProductListItem({image, title, price, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={image} />
        <TouchableOpacity
          style={styles.icon_container}
          onPress={() => console.log('like bastın')}>
          <Icon name="heart" size={20} color="#8F959E" />
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 13, color: 'black', fontWeight: '500'}}>
        {title}
      </Text>
      <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
        {price}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 257,
    marginHorizontal: 12,
    marginBottom: 15,
  },
  image_container: {},
  image: {width: 160, height: 200, borderRadius: 15},
  icon_container: {position: 'absolute', right: 15, top: 15},
});
