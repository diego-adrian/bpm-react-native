import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions, TextInput} from 'react-native';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./assets/login/logoAgetic.png')} style={styles.logoAgetic}></Image>
        </View>
        <View style={styles.body}>
          <TextInput
           placeholder="Hola"
          ></TextInput>
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
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoAgetic: {
    width: 100,
    height: 100,
    borderWidth: 2,
    resizeMode: 'contain',
    borderStyle: 'solid',
    borderColor: '#000'
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
