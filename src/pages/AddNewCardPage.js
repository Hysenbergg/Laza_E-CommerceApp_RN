import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import HomeTopHeader from '../components/HomeTopHeader';
import Footer from '../components/Footer';

const CustomInput = ({title, value, onChangeText}) => {
  return (
    <View style={styles.input_container}>
      <Text style={styles.input_title}>{title}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default function AddNewCardPage({navigation}) {
  const [value, setValue] = useState('mastercard');
  const [cardOwner, setCardOwner] = useState('Mrh Raju');
  const [cardNumber, setCardNumber] = useState('5254 7634 8734 7690');
  const [exp, setExp] = useState('24/24');
  const [cvv, setCvv] = useState('7763');

  const CardBrand = ({image, name, onPress}) => {
    return (
      <TouchableOpacity
        style={
          name === value
            ? styles.brand_selected_button
            : styles.brand_default_button
        }
        onPress={onPress}>
        <Image source={image} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <HomeTopHeader title="Add New Card" onPress={() => navigation.pop()} />
      <View style={styles.inner_container}>
        {/* Creadit Card Brands */}
        <View style={styles.card_brand_container}>
          <CardBrand
            image={require('../assets/mastercard_logo.png')}
            name="mastercard"
            onPress={() => setValue('mastercard')}
          />
          <CardBrand
            image={require('../assets/paypal_logo.png')}
            name="paypal"
            onPress={() => setValue('paypal')}
          />
          <CardBrand
            image={require('../assets/end_logo.png')}
            name="third_logo"
            onPress={() => setValue('third_logo')}
          />
        </View>
        <View style={styles.input_shell_container}>
          <CustomInput
            title="Card Owner"
            value={cardOwner}
            onChangeText={setCardOwner}
          />
          <CustomInput
            title="Card Number"
            value={cardNumber}
            onChangeText={setCardNumber}
          />
          <View style={styles.country_container}>
            <View style={{flex: 1, marginRight: 15}}>
              <CustomInput title="EXP" value={exp} onChangeText={setExp} />
            </View>
            <View style={{flex: 1}}>
              <CustomInput title="CVV" value={cvv} onChangeText={setCvv} />
            </View>
          </View>
        </View>
      </View>
      <Footer
        text="Add Card"
        onPress={() => navigation.pop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inner_container: {
    marginTop: 10,
    marginHorizontal: 20,
    flex: 1
  },
  card_brand_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  brand_default_button: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F6FA',
    borderRadius: 10,
  },
  brand_selected_button: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFEEE3',
    borderWidth: 1,
    borderColor: '#FF5F00',
    borderRadius: 10,
  },
  country_container: {
    flexDirection: 'row',
  },

  // Custom Input Container
  input_container: {
    marginBottom: 15,
  },
  input_title: {
    fontSize: 17,
    color: 'black',
    fontWeight: '500',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F5F6FA',
    color: '#8F959E',
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});
