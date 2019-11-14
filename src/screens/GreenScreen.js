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

class GreenScreen extends React.Component {

    static onEnter() {
        console.log('On focus enter');
    }

    static onExit(){
        console.log('On Focus Exit');
    }

  render(){
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            GREEN SCREEN
          </Text>
          <Text style={styles.welcome} 
            onPress={() => Actions.pop()}>
            Go Back
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
    backgroundColor: 'green',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default GreenScreen;
