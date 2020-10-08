import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Launch = () => {
  return (
    <View style={stlyes.container}>
      <Image style={stlyes.image} source={require('../assets/appicon.png')} />
    </View>
  );
};

const stlyes = StyleSheet.create({
  container: {
    backgroundColor: '#F2148C',
    justifyContent: 'center',
    alignItems: 'center',
    height: 812,
  },
  image: {
    width: 295.82,
    height: 294.82,
  },
});
export default Launch;
