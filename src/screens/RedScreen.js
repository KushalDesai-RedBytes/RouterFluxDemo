/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class RedScreen extends React.Component {

    static onEnter() {
        console.log('RED On focus enter');
    }

    static onExit(){
        console.log('RED On Focus Exit');
    }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome} 
            onPress={() => Actions.green()}>
            RED SCREEN
          </Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default RedScreen;