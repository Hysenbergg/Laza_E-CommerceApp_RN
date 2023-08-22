import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../config/colors';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Pages import
import HomeStack from './HomeStack';
import WishlistPage from '../pages/WishlistPage';
import BasketStack from './BasketStack';
import WalletPage from '../pages/WalletPage';

const Tab = createBottomTabNavigator();

const TabButton = ({focused, title, icon}) => {
  return (
    <View style={styles.tab_inner_container}>
      {focused ? (
        <View>
          <Text style={styles.tab_text}>{title}</Text>
        </View>
      ) : (
        <Icon name={icon} size={24} color={'#8F959E'} />
      )}
    </View>
  );
};

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabButton focused={focused} title="Home" icon="home" />
          ),
        }}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabButton focused={focused} title="Wishlist" icon="heart" />
          ),
        }}
        name="Wishlist"
        component={WishlistPage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabButton focused={focused} title="Basket" icon="handbag" />
          ),
        }}
        name="BasketStack"
        component={BasketStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabButton focused={focused} title="Wallet" icon="wallet" />
          ),
        }}
        name="Wallet"
        component={WalletPage}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
  },
  tab_inner_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    width: 65,
  },
  tab_text: {
    fontSize: 15,
    color: Colors.primary,
    fontWeight: 'bold',
  },
});
