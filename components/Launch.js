import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Launch = () => {
  return (
    <View>
      <Image style={stlyes.image} source={require('../assets/appicon.png')} />
    </View>
  );
};

const stlyes = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
export default Launch;
