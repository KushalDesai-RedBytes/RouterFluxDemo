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

class BlueScreen extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome} >
            Blue SCREEN
          </Text>
          <Text style={styles.welcome} 
            onPress={() => Actions.yellow()}>
            Go to Tab 3
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
    backgroundColor: 'blue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default BlueScreen;