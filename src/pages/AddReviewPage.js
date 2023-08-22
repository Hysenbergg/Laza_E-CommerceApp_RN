import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import HomeTopHeader from '../components/HomeTopHeader';
import Footer from '../components/Footer';
import {Slider} from '@miblanchard/react-native-slider';

export default function AddReviewPage({navigation}) {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');
  const [value, setValue] = useState(3);

  return (
    <SafeAreaView style={styles.container}>
      <HomeTopHeader title="Add Review" onPress={() => navigation.pop()} />
      <View style={styles.inner_container}>
        {/* Kullanıcının isim gireceği input componenti çok gerekli değil . */}
        <View style={styles.name_container}>
          <Text style={styles.title}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Type your name"
            placeholderTextColor="#8F959E"
          />
        </View>
        {/* Kullanıcının ürün hakkındaki yorumlarını yazdıkları component. */}
        <View style={styles.experience_container}>
          <Text style={styles.title}>How was your experience ?</Text>
          <TextInput
            style={[styles.input, {justifyContent: 'center'}]}
            value={experience}
            onChangeText={setExperience}
            placeholder="Describe your experience?"
            placeholderTextColor="#8F959E"
            multiline
            numberOfLines={8}
            textAlignVertical="top"
          />
        </View>
        {/* Sliderin bulunduğu component. */}
        <View style={styles.star_container}>
          <Text style={styles.title}>Star</Text>
          <View style={styles.star_slider}>
            <Text style={[styles.star_value, {marginRight: 10}]}>0.0</Text>
            <Slider
              value={value}
              onValueChange={setValue}
              minimumValue={0}
              maximumValue={5}
              step={1}
              trackClickable={true}
              containerStyle={{
                width: 320
              }}
            />
            <Text style={[styles.star_value, {marginLeft: 10}]}>5.0</Text>
          </View>
        </View>
      </View>
      <Footer
        text="Submit Review"
        onPress={() => console.log('Yorum kayıt edildi')}
      />
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
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  input: {
    padding: 10,
    backgroundColor: '#F5F6FA',
    borderRadius: 10,
    color: 'black',
    marginTop: 10,
    fontSize: 15,
  },
  name_container: {
    marginTop: 20,
  },
  experience_container: {
    marginVertical: 20,
  },
  star_container: {
    flex: 1,
  },
  star_slider: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  star_value: {
fontSize: 13,
 color: 'black',
  fontWeight: '500',
  }
});
