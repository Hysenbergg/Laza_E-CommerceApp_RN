import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {productList} from '../../productList';
import CustomIconButton from '../components/CustomIconButton';
import Footer from '../components/Footer';
import ReviewComponent from '../components/ReviewComponent';

const sizes = ['S', 'M', 'L', 'XL', '2XL'];

export default function ProductDetailPage({route, navigation}) {
  const {product_id} = route.params;

  const selected_product = productList.find(
    product => product.id == product_id,
  );

  return (
    <ScrollView style={styles.container}>
      {/* En üstte ürünün resmi büyük bir şekilde söteriliyor ve top header ile beraber. */}
      <View style={styles.photo_top_container}>
        <View style={styles.image_container}>
          <Image style={styles.image} source={selected_product.image} />
          <View style={styles.top_container}>
            <CustomIconButton
              style={true}
              icon="arrow-left-circle"
              onPress={() => navigation.pop()}
            />
            <CustomIconButton
              style={true}
              icon="handbag"
              onPress={() => navigation.navigate('Basket')}
            />
          </View>
        </View>
      </View>
      {/* Ürün başlığı ve fiyat gösteren component. */}
      <View style={styles.title_price_container}>
        <View style={styles.title_container}>
          <Text style={styles.top_title}>Men's Printed Pullover Hoodie</Text>
          <Text style={styles.bottom_title}>{selected_product.title}</Text>
        </View>
        <View>
          <Text style={styles.top_title}>Price:</Text>
          <Text style={styles.bottom_title}>{selected_product.price}</Text>
        </View>
      </View>
      {/* İmage Componenti tek bir resim buna modal ekleyip tıkladnıpında büyük şekilde göster. */}
      <View style={styles.image_detail_container}>
        <Image
          style={styles.image_detail}
          source={require('../assets/product_item.png')}
        />
      </View>
      {/* Sizes listelendiği component. */}
      <View style={styles.size_container}>
        <View style={styles.size_title_container}>
          <Text style={styles.size_title}>Size</Text>
          <TouchableOpacity>
            <Text style={styles.size_view_title}>Size Guide</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.size_button_container}>
          {sizes.map((size, index) => (
            <TouchableOpacity
              style={styles.size_button_inner_container}
              key={index}>
              <Text style={styles.size_button_text}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* Ürünün Açıklamasının bulunduğu component. */}
      <View style={{marginHorizontal: 20, marginTop: 5}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 10,
          }}>
          Description
        </Text>
        <Text style={{fontSize: 16, color: '#8F959E'}}>
          The Nike Throwback Pullover Hoodie is made from premium French terry
          fabric that blends a performance feel with{' '}
          <Text style={{fontWeight: '600', color: 'black'}}>Read More..</Text>
        </Text>
      </View>
      {/* Yorumların en başında yer alan tek yorum componenti. Tamamına gidiliebliyor. */}
      <View style={{marginHorizontal: 20, marginVertical: 15}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
              marginBottom: 10,
            }}>
            Reviews
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Reviews')}>
            <Text style={{fontSize: 15, color: '#8F959E'}}>View All</Text>
          </TouchableOpacity>
        </View>
        <ReviewComponent
          name="Ronald Richards"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          malesuada eget vitae amet..."
          image={require('../assets/profile_image_1.png')}
        />
      </View>
      {/* En altta bulunan fiyat componenti */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <View>
          <Text style={{fontSize: 17, color: 'black', fontWeight: '500'}}>
            Total Price
          </Text>
          <Text style={{fontSize: 13, color: '#8F959E'}}>with VAT,SD</Text>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
          $125
        </Text>
      </View>
      <Footer
        text="Add to Cart"
        onPress={() => console.log('CArta eklendi.')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  photo_top_container: {
    width: '100%',
    backgroundColor: '#F5F6FA',
  },
  image_container: {
    position: 'relative',
    height: 400,
  },
  image: {width: '100%', height: '100%', resizeMode: 'contain'},
  top_container: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    left: 20,
    right: 20,
    justifyContent: 'space-between',
    marginTop: 45,
  },
  title_price_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  top_title: {
    fontSize: 15,
    color: '#8F959E',
  },
  bottom_title: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  image_detail_container: {
    marginHorizontal: 20,
    marginTop: 6,
  },
  image_detail: {
    width: '100%',
  },
  size_container: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  size_title_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  size_title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  size_view_title: {
    fontSize: 15,
    color: '#8F959E',
  },
  size_button_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  size_button_inner_container: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F6FA',
    borderRadius: 10,
  },
  size_button_text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
