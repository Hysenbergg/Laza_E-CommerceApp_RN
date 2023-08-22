import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';

// Import Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Import pages
import BottomTab from './BottomTab';
import AccountInformationPage from '../pages/AccountInformationPage';
import PasswordPages from '../pages/PasswordPages';
import BasketPage from '../pages/BasketPage';
import WalletPage from '../pages/WalletPage';
import WishlistPage from '../pages/WishlistPage';
import SettingsPage from '../pages/SettingsPage';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#9775FA',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <SimpleLineIcons name="home" size={22} color={color} />
          ),
          title: 'Ana Sayfa'
        }}
        name="BottomTab"
        component={BottomTab}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <SimpleLineIcons name="exclamation" size={22} color={color} />
          ),
          title: 'Account Infromation'
        }}
        name="AccountInfromation"
        component={AccountInformationPage}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons name="lock-outline" size={22} color={color} />
          ),
          title: 'Password'
        }}
        name="PasswordPages"
        component={PasswordPages}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <SimpleLineIcons name="handbag" size={22} color={color} />
          ),
          title: 'Order'
        }}
        name="Basket"
        component={BasketPage}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <SimpleLineIcons name="wallet" size={22} color={color} />
          ),
          title: 'My Cards'
        }}
        name="Wallet"
        component={WalletPage}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <SimpleLineIcons name="heart" size={22} color={color} />
          ),
          title: 'Wishlist'
        }}
        name="Wishlist"
        component={WishlistPage}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
          title: 'Settings'
        }}
        name="Settings"
        component={SettingsPage}
      />
    </Drawer.Navigator>
  );
}
