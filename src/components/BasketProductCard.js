import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default function BasketProductCard({
  image,
  name,
  price,
  increment,
  productCount,
  decrement,
  trash,
}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.card_detail_container}>
        <Text style={styles.product_name}>{name}</Text>
        <Text style={styles.product_price}>{price}</Text>
        <View style={styles.inner_container}>
          <View style={styles.count_product_container}>
            <TouchableOpacity onPress={decrement}>
              <Icon name="arrow-down-circle" size={20} color="#8F959E" />
            </TouchableOpacity>
            <Text style={styles.count}>{productCount}</Text>
            <TouchableOpacity onPress={increment}>
              <Icon name="arrow-up-circle" size={20} color="#8F959E" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.trash_icon_container} onPress={trash}>
            <Icon name="trash" size={16} color="#8F959E" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#DEDEDE',
    borderRadius: 10,
  },
  image: {},
  card_detail_container: {
    flex: 1,
    marginLeft: 15,
  },
  product_name: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    marginBottom: 10,
  },
  product_price: {
    fontSize: 13,
    color: '#8F959E',
    marginBottom: 15,
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  count_product_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    marginHorizontal: 15,
  },
  trash_icon_container: {
    borderWidth: 1,
    padding: 3,
    borderRadius: 50,
    borderColor: '#8F959E',
  },
});
