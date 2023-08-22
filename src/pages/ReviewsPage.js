import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import HomeTopHeader from '../components/HomeTopHeader';
import CustomIconTextButton from '../components/CustomIconTextButton';
import ReviewComponent from '../components/ReviewComponent';

const reviews = [
  {
    id: 0,
    name: 'Jenny Wilson',
    image: require('../assets/profile_image_1.png'),
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...',
  },
  {
    id: 1,
    name: 'Ronald Richards',
    image: require('../assets/profile_image_2.png'),
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...',
  },
  {
    id: 2,
    name: 'Guy Hawkins',
    image: require('../assets/profile_image_3.png'),
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...',
  },
  {
    id: 3,
    name: 'Erling Haaland',
    image: require('../assets/profile_image_4.png'),
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...',
  },
  {
    id: 5,
    name: 'Emenike',
    image: require('../assets/profile_image_2.png'),
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...',
  },
];

export default function ReviewsPage({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <HomeTopHeader title="Reviews" onPress={() => navigation.pop()} />
      {/* Top header altında kaç yorum olduğunu gösteren ve yeni yorum ekleme butonu bulunuyor. */}
      <View style={styles.inner_container}>
        {/* Review Top Container */}
        <View style={styles.reviews_top_container}>
          <View style={styles.reviews_star_container}>
            <Text style={styles.reviews_count}>{reviews.length} Reviews</Text>
            <View style={styles.reviews_top_star_container}>
              <Text style={styles.star_percent}>4.8 </Text>
              <Text>Yıldızlar</Text>
            </View>
          </View>
          <CustomIconTextButton onPress={() => navigation.navigate('AddReview')} />
        </View>
        {/* Yorumların listelendiği component */}
        {reviews.map(item => (
          <ReviewComponent
            key={item.id}
            name={item.name}
            review={item.review}
            image={item.image}
          />
        ))}
      </View>
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
  reviews_top_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  reviews_star_container: {
    flex: 1,
  },
  reviews_count: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  reviews_top_star_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star_percent: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
  },
  review_container: {marginVertical: 10},
});
