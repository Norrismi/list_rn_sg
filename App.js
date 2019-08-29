import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ListScreen from './component/ListScreen'
import HomeScreen from './component/HomeScreen'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListScreen/>
        <HomeScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    color: 'red'
  }
});
