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
  Image
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Tab1Component from '../components/tabcomponent/tab1Component';

//import all screens here
import { BlackScreen, BlueScreen, RedScreen, GreenScreen, OrangeScreen, YellowScreen } from '../screens'

// const TabIcon = ({ focused, title }) => {
//   return (
//     <View style={{ backgroundColor: 'lightblue', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{color: focused ? 'red' :'black'}}>{title}</Text>
//     </View>
//   );
// }

const Tab2Icon = ({ focused, title }) => {
  return (
    <View style={{ backgroundColor: 'green', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'  }}>
      <Image 
        style={{ height: 30, width: 30 }} 
        source={focused ? require('../assets/images/home-selected.png') : require('../assets/images/home-unselected.png')}/>
      <Text style={{color: focused ? 'red' :'black'}}>{title}</Text>
    </View>
  );
}

const Routes = () => {
  return (
    <Router>
        <Scene key="root" >

          <Scene 
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: '#01CBC6'}}
            hideNavBar={true}
            showLabel = {false}
          >
          {/* Tab and it's scenes */}
          <Scene key="tab1" title="HOME" icon={Tab1Component}>
            <Scene key="red"
                component = {RedScreen}
                title="Red">

            </Scene>

            <Scene key="green"
                component = {GreenScreen}
                title="Green"
                backTitle="helo">

            </Scene>
          </Scene>

          <Scene key="tab2" title="PROFILE" icon={Tab2Icon}>
            <Scene key="black"
              title="Black"
              component = {BlackScreen}>
            </Scene>

            <Scene key="blue"
              title="Blue"
              component = {BlueScreen}>
            </Scene>
          </Scene>

          <Scene key="tab3" title="SETTINGS" icon={Tab1Component}>
            <Scene key="orange"
              title="Orange"
              component = {OrangeScreen}>
            </Scene>

            <Scene key="yellow"
              title="Yellow"
              component = {YellowScreen}>
            </Scene>
          </Scene>
        </Scene>

        </Scene>
    </Router>
  );
}

export default Routes;
