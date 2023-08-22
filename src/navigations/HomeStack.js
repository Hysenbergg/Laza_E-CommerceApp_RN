import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Import Pages
import HomePage from '../pages/HomePage';
import ProductDetailPage from '../pages/ProductDetailPage';
import ReviewsPage from '../pages/ReviewsPage';
import AddReviewPage from '../pages/AddReviewPage';
import BrandListPage from '../pages/BrandListPage';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name='HomePage' component={HomePage} />
        <Stack.Screen options={{
          tabBarVisible: false
        }} name='ProductDetail' component={ProductDetailPage} />
        <Stack.Screen name='Reviews' component={ReviewsPage} />
        <Stack.Screen name='AddReview' component={AddReviewPage} />
        <Stack.Screen name='BrandList' component={BrandListPage} />
    </Stack.Navigator>
  );
}
