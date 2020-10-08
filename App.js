import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Launch from './components/Launch';
const App = () => {
  return (
    <>
      <SafeAreaView>
        <Launch />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
