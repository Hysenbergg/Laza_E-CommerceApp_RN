import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import HomeTopHeader from '../components/HomeTopHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomSwitch from '../components/CustomSwitch';
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

const images = [
  {
    id: 0,
    image: require('../assets/credit_card_1.png'),
  },
  {
    id: 1,
    image: require('../assets/credit_card_2.png'),
  },
];

export default function PaymentDetailPage({navigation}) {
  const [cardOwner, setCardOwner] = useState('Mrh Raju');
  const [cardNumber, setCardNumber] = useState('5254 7634 8734 7690');
  const [exp, setExp] = useState('24/24');
  const [cvv, setCvv] = useState('7763');
  const [value, setValue] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <HomeTopHeader title="Payment" onPress={() => navigation.pop()} />
      <View style={styles.inner_container}>
        <View style={styles.credit_card_container}>
          <FlatList
            data={images}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Image style={{marginRight: 15}} source={item.image} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <TouchableOpacity
          style={styles.icon_button_container}
          onPress={() => navigation.navigate('AddNewCard')}>
          <Icon name="edit" size={17} color="#9775FA" />
          <Text style={styles.button_text}>Add New Card</Text>
        </TouchableOpacity>
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
        <View style={{marginBottom: 40}}>
          <CustomSwitch
            title="Save card info"
            value={value}
            onValueChange={setValue}
          />
        </View>
      </View>
      <Footer
        text="Save Card"
        onPress={() => navigation.pop()}
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
    flex: 1,
  },
  credit_card_container: {
    marginTop: 10,
    marginBottom: 15,
  },
  icon_button_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F2FF',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9775FA',
    marginBottom: 20,
  },
  button_text: {
    paddingLeft: 5,
    fontSize: 17,
    fontWeight: '500',
    color: '#9775FA',
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
