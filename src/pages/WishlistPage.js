import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CustomIconButton from '../components/CustomIconButton';
import {productList} from '../../productList';
import ProductListItem from '../components/ProductListItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function WishlistPage({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        {/* Top Container */}
        <View style={styles.top_container}>
          <CustomIconButton
            icon="arrow-left-circle"
            onPress={() => navigation.navigate('HomePage')}
          />
          <Text style={styles.wishlist_text}>Wishlist</Text>
          <CustomIconButton
            icon="handbag"
            onPress={() => navigation.navigate('Basket')}
          />
        </View>
        <View style={styles.top_info_container}>
          <View>
            <Text style={styles.items_count}>365 Items</Text>
            <Text style={styles.bottom_text}>Availalbe in Stock</Text>
          </View>
          <TouchableOpacity
            style={styles.sort_button}
            onPress={() => console.log('sorta basıldı')}>
            <Icon name="playlist-edit" size={18} color="black" />
            <Text style={styles.button_text}>Edit</Text>
          </TouchableOpacity>
        </View>
        {/* Product List */}
        <View style={{flex: 1}}>
          <FlatList
            data={productList}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <ProductListItem
                title={item.title}
                price={item.price}
                image={item.image}
                onPress={() =>
                  navigation.navigate('ProductDetail', {product_id: item.id})
                }
              />
            )}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inner_container: {
    marginHorizontal: 20,
    flex: 1,
  },
  top_container: {
    flexDirection: 'row',
    marginTop: 45,
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  wishlist_text: {
    fontSize: 17,
    alignSelf: 'center',
    color: 'black',
    fontWeight: '600',
  },
  top_info_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  items_count: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
  },
  bottom_text: {
    fontSize: 15,
    color: '#8F959E',
  },
  sort_button: {
    flexDirection: 'row',
    backgroundColor: '#F5F6FA',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    height: 40,
    width: 70,
    justifyContent: 'center',
  },
  button_text: {
    color: 'black',
    marginLeft: 5,
    fontSize: 15,
    fontWeight: '600',
  },
});
