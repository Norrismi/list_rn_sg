import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ListScreen from './component/ListScreen'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
