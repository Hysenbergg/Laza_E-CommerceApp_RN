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
import SearchBar from '../components/SearchBar';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {Colors} from '../config/colors';
import ProductListItem from '../components/ProductListItem';

// import svg icons
import AdidasSvg from '../assets/icons/Adidas.svg';
import NikeSvg from '../assets/icons/nike.svg';
import FilaSvg from '../assets/icons/fila.svg';
import PumaSvg from '../assets/icons/puma.svg';
import {productList} from '../../productList';

// Brands Object
const brands = [
  {
    id: 0,
    title: 'Adidas',
    icon: <AdidasSvg width={25} height={25} />,
  },
  {
    id: 1,
    title: 'Nike',
    icon: <NikeSvg width={25} height={25} />,
  },
  {
    id: 2,
    title: 'Fila',
    icon: <FilaSvg width={25} height={25} />,
  },
  {
    id: 3,
    title: 'Puma',
    icon: <PumaSvg width={25} height={25} />,
  },
];

export default function HomePage({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top_container}>
        <CustomIconButton
          icon="menu"
          onPress={() => navigation.openDrawer()}
        />
        <CustomIconButton
          icon="handbag"
          onPress={() => navigation.navigate('Basket')}
        />
      </View>
      <View style={styles.title_container}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.message}>Welcome to Laza</Text>
      </View>
      <View style={styles.search_mic_container}>
        <SearchBar />
        <TouchableOpacity style={styles.mic_container}>
          <Icon name="microphone" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.brand_top_container,
          {marginHorizontal: 20, marginTop: 20},
        ]}>
        <Text style={styles.brand_title}>Choose Brand</Text>
        <TouchableOpacity>
          <Text style={styles.brand_view}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.brand_list_container}>
        <FlatList
          data={brands}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.brand_list_inner_container}
              onPress={() =>
                navigation.navigate('BrandList', {brand_id: item.id})
              }>
              <View style={styles.brand_list_icon_container}>{item.icon}</View>
              <View style={styles.brand_list_title_container}>
                <Text style={styles.brand_list_title}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View
        style={[
          styles.brand_top_container,
          {marginBottom: 10, marginHorizontal: 20},
        ]}>
        <Text style={styles.brand_title}>New Arraival</Text>
        <TouchableOpacity>
          <Text style={styles.brand_view}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.arraival_container}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top_container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 35,
  },
  title_container: {
    marginLeft: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  message: {
    fontSize: 15,
    color: '#8F959E',
  },
  search_mic_container: {
    flexDirection: 'row',
    marginRight: 20,
  },
  mic_container: {
    backgroundColor: Colors.primary,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  brand_top_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand_title: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  brand_view: {
    fontSize: 15,
    color: '#8F959E',
  },
  brand_list_container: {
    marginLeft: 10,
    marginVertical: 15,
  },
  brand_list_inner_container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: 115,
    backgroundColor: '#F5F6FA',
    marginRight: 10,
    borderRadius: 10,
    height: 50,
  },
  brand_list_icon_container: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  brand_list_title_container: {flex: 1, alignItems: 'center'},
  brand_list_title: {
    fontSize: 15,
    color: 'black',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  arraival_container: {flex: 1, marginHorizontal: 20, marginTop: 5},
});
