import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeTopHeader from '../components/HomeTopHeader';
import BasketProductCard from '../components/BasketProductCard';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import VisaLogo from '../assets/icons/visa.svg';
import Footer from '../components/Footer';

export default function BasketPage({navigation}) {
  const [countOne, setCountOne] = useState(1);
  const [countTwo, setCountTwo] = useState(1);

  return (
    <ScrollView style={styles.container}>
      <HomeTopHeader
        title="Cart"
        onPress={() => navigation.navigate('HomePage')}
      />
      <View style={styles.inner_container}>
        <BasketProductCard
          image={require('../assets/card_image_1.png')}
          name="Men's Tie-Dye T-Shirt Nike Sportswear"
          price="$45 (-$4.00 Tax)"
          increment={() => setCountOne(countOne + 1)}
          productCount={countOne}
          decrement={() => setCountOne(countOne - 1)}
          trash={() => console.log('çöpe atıldı.')}
        />
        <BasketProductCard
          image={require('../assets/card_image_2.png')}
          name="Men's Tie-Dye T-Shirt Nike Sportswear"
          price="$45 (-$4.00 Tax)"
          increment={() => setCountTwo(countTwo + 1)}
          productCount={countTwo}
          decrement={() => setCountTwo(countTwo - 1)}
          trash={() => console.log('çöpe atıldı.')}
        />
        {/* Address Container */}
        <View style={styles.address_container}>
          <TouchableOpacity style={styles.address_button_container} onPress={() => navigation.navigate('AddressDetail')}>
            <Text style={styles.title}>Delivery Address</Text>
            <Icon name="arrow-right" size={16} color="black" />
          </TouchableOpacity>
          <View style={styles.address_inner_container}>
            <View>
              <Image source={require('../assets/map_image.png')} />
              <Icon
                style={{
                  backgroundColor: '#FF7043',
                  position: 'absolute',
                  top: 12,
                  left: 13,
                  borderRadius: 50,
                  padding: 3,
                }}
                name="location-pin"
                color="white"
                size={18}
              />
            </View>
            <View style={styles.address_text_container}>
              <Text style={styles.address_title}>
                Chhatak, Sunamgonj 12/8AB
              </Text>
              <Text style={styles.address_shortname}>Sylhet</Text>
            </View>
            <Icons style={styles.icon} name="check" size={22} color="white" />
          </View>
        </View>
        {/* Payment Method Container */}
        <View style={styles.payment_method_container}>
          <TouchableOpacity style={styles.address_button_container} onPress={() => navigation.navigate('PaymentDetail')}>
            <Text style={styles.title}>Payment Method</Text>
            <Icon name="arrow-right" size={16} color="black" />
          </TouchableOpacity>
          <View style={styles.address_inner_container}>
            <View style={styles.visa_logo_container}>
              <VisaLogo width={30} height={30} />
            </View>
            <View style={styles.address_text_container}>
              <Text style={styles.address_title}>Visa Classic</Text>
              <Text style={styles.address_shortname}>**** 7690</Text>
            </View>
            <Icons style={styles.icon} name="check" size={22} color="white" />
          </View>
        </View>
        {/* Price Component */}
        <View style={{marginBottom: 24}}>
          <Text style={[styles.title, {marginBottom: 15}]}>Order Info</Text>
          <View style={[styles.price_container, {marginBottom: 10}]}>
            <Text style={styles.price_title}>Subtotal</Text>
            <Text style={styles.price}>$110</Text>
          </View>
          <View style={[styles.price_container, {marginBottom: 15}]}>
            <Text style={styles.price_title}>Shipping cost</Text>
            <Text style={styles.price}>$10</Text>
          </View>
          <View style={styles.price_container}>
            <Text style={styles.price_title}>Total</Text>
            <Text style={styles.price}>$120</Text>
          </View>
        </View>
      </View>
      <Footer
        text="Checkout"
        onPress={() => navigation.navigate('Confirmed')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inner_container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  address_container: {
    marginBottom: 20,
  },
  address_button_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  address_inner_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  address_text_container: {
    flex: 1,
    marginLeft: 15,
  },
  address_title: {
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
    marginBottom: 5,
  },
  address_shortname: {
    fontSize: 13,
    fontWeight: '400',
  },
  icon: {
    backgroundColor: '#4AC76D',
    borderRadius: 50,
    padding: 2,
  },
  payment_method_container: {
    marginBottom: 20,
  },
  visa_logo_container: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F6FA',
    borderRadius: 10,
  },
  price_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price_title: {
    fontSize: 15,
    color: '#8F959E',
    fontWeight: '400',
  },
  price: {
    fontWeight: '600',
    fontSize: 15,
    color: 'black',
  },
});
