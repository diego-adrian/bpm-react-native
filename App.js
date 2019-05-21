import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.header}>
          <Image source={require('./assets/login/tres.jpg')} style={[styles.backgroundImage, styles.reverse]}></Image>
        </View> */}
        <View style={styles.body}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js Adrian</Text>
        </View>
        <View style={styles.footer}>
          <Image source={require('./assets/login/backgroundFooter.jpg')} style={[styles.backgroundImage]}></Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'flex-start'
  },
  footer: {
    flex: 2,
    alignItems: 'flex-end'
  },
  reverse: {
    transform: [{
      scaleY: -1
    }]
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
    overflow: 'visible',
    width: Dimensions.get('window').width
  },
  body: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
});
