import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
// import Launch from './components/Launch';
const App = props => {
  return (
    <>
      <View style={styles.container}>
        <Text>this is the first screen</Text>
        <Button
          title="Push Settings Screen"
          color="#710ce3"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'Settings',
                options: {
                  topBar: {
                    title: {
                      text: 'Settings',
                    },
                  },
                },
              },
            })
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2148C',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default App;
