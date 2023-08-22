import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Switch} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Menu from '../assets/icons/menu_closed.svg';

export default CustomDrawer = props => {
  const [value, setValue] = useState(false);
  
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'white'}}>
        {/* Üst kısımda bulunan iconun containerı. */}
        <View
          style={{
            alignItems: 'flex-start',
            marginTop: 45,
            marginLeft: 20,
            marginBottom: 30,
          }}>
          <TouchableOpacity
            style={{backgroundColor: '#F5F6FA', padding: 10, borderRadius: 50}}>
            <Menu width={20} height={20} />
          </TouchableOpacity>
        </View>

        {/* Profil fotoğrafı ve kaç order olduğunu gösteren alan. */}
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            marginBottom: 30,
          }}>
          <Image
            source={require('../assets/profile_image_3.png')}
            style={{height: 45, width: 45, borderRadius: 40, marginBottom: 10}}
          />
          <View style={{flex: 1, marginLeft: 15}}>
            <Text
              style={{
                color: 'black',
                fontSize: 17,
                fontWeight: '600',
              }}>
              Mrh Raju
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  color: 'black',
                  marginRight: 5,
                }}>
                Verified Profile
              </Text>
              <MaterialIcons name="verified" size={14} color="#4AC76D" />
            </View>
          </View>
          <View style={{justifyContent: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#F5F5F5',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text style={{color: '#8F959E', fontSize: 11}}>3 Order</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Dark Mode Button */}
        <View style={{flexDirection: 'row', marginHorizontal: 17, alignItems: 'center', marginBottom: 5}}>
          <Ionicons name="sunny-outline" size={24} color="black" />
          <Text style={{flex: 1, marginLeft: 5, fontSize: 15, color: 'black'}}>Dark Mode</Text>
          <Switch value={value} onValueChange={setValue} />
        </View>

        {/* DrawerItemList propu sayesinde navigationda belirlenmiş sekmeler buton şeklinde listeleniyor. */}
        <View style={{flex: 1, backgroundColor: 'white', marginBottom: 5}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{marginHorizontal: 20, marginBottom: 80}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name="logout" size={22} color="red" />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
                color: 'red',
              }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
