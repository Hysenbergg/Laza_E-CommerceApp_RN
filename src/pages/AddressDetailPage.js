import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import HomeTopHeader from '../components/HomeTopHeader';
import Footer from '../components/Footer';
import CustomSwitch from '../components/CustomSwitch';

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

export default function AddressDetailPage({navigation}) {
  const [name, setName] = useState('Mrh Raju');
  const [country, setCountry] = useState('Bangladesh');
  const [city, setCity] = useState('Sylhet');
  const [phonNumber, setPhoneNumber] = useState('+880 1453-987533');
  const [address, setAddress] = useState('Chhatak, Sunamgonj 12/8AB');
  const [value, setValue] = useState(false);

  return (
    <View style={styles.container}>
      <HomeTopHeader title="Address" onPress={() => navigation.pop()} />
      <View style={styles.inner_container}>
        <CustomInput title="Name" value={name} onChangeText={setName} />
        <View style={styles.country_container}>
          <View style={{flex: 1, marginRight: 15}}>
            <CustomInput title="Country" value={country} onChangeText={setCountry} />
          </View>
          <View style={{flex: 1}}>
            <CustomInput title="City" value={city} onChangeText={setCity} />
          </View>
        </View>
        <CustomInput title="Phone Number" value={phonNumber} onChangeText={setPhoneNumber} />
        <CustomInput title="Address " value={address} onChangeText={setAddress} />
        <CustomSwitch title="Save as primary address" value={value} onValueChange={setValue} />
      </View>
      <Footer
        text="Save Address"
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
    marginHorizontal: 20,
    flex: 1
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
