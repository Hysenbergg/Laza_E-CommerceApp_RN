import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function ReviewComponent({ name, review, image}) {
  return (
    <View style={styles.review_container}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{width: 40, height: 40, borderRadius: 50}}
          source={image}
        />
        <View style={{flex: 1, marginLeft: 10}}>
          <Text style={{fontSize: 17, color: 'black', fontWeight: '500'}}>
           {name}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={{fontSize: 12}}>Saat</Text>
            <Text style={{marginLeft: 5, fontSize: 12}}>13 Sep, 2020</Text>
          </View>
        </View>
        <View style={{}}>
          <Text style={{alignItems: 'center'}}>
            <Text style={{color: 'black', fontSize: 17, fontWeight: '500'}}>
              4.8
            </Text>{' '}
            rating
          </Text>
          <Text style={{marginTop: 5}}>Yıldızlar</Text>
        </View>
      </View>
      <Text style={{marginTop: 10, fontSize: 17, color: '#8F959E'}}>
        {review}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  review_container: {marginVertical: 10},
});
