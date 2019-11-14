import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

const Tab1Component = ({ focused, title }) => {
    return (
      <View style={{ backgroundColor: 'lightblue', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color: focused ? 'red' :'black'}}>{title}</Text>
      </View>
    );
  }

  export default Tab1Component;