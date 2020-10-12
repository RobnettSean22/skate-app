import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Launch = () => {
  return (
    <View>
      <Image
        style={stlyes.image}
        source={require('../assets/appiconpure-white.png')}
      />
      <Text>this is the second screen</Text>
    </View>
  );
};

const stlyes = StyleSheet.create({
  image: {
    width: 295.82,
    height: 294.82,
    transform: [{rotate: '-4deg'}],
  },
});
export default Launch;
