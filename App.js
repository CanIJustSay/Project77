import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from "./screens/home";
import Track from "./screens/starmap";
import Meteor from "./screens/crafts";
import Updates from "./screens/pic";
export default class App extends React.Component {
  render(){
    return (
   <AppContainer />
  );
    }
}
var nav = createStackNavigator({
  Home: {screen: Home,navigationOptions:{headerShown:false}},
  Map: {screen: Track},
  Pic: {screen: Meteor},
  Craft: {screen: Updates},

});
var AppContainer = createAppContainer(nav);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
