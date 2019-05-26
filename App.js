import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from './assets/login/logoAgetic.png';

const {width: WIDTH} = Dimensions.get('window');
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={Logo} style={styles.LogoAgetic}></Image>
          <View style={styles.login}>
          </View>
        </View>
        <View style={styles.footer}>
          <Icon name="android" size={50} color={'black'}/>
          <TextInput
            style={styles.inputText}
            placeholderTextColor={'rgba(0,0,0,.2)'}
            placeholder={'Adrian Barra'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
    zIndex: 1,
    backgroundColor: '#880E4F'
  },
  LogoAgetic: {
    width: 70,
    height: 70,
    resizeMode: 'contain'
  },
  footer: {
    flex: 3,
    backgroundColor: '#FFF'
  },
  inputText: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    borderRadius: 4,
    margin: 50,
    width: 'auto'
  },
  login: {
    flex: 1,
    position: 'absolute',
    borderRadius: 4,
    borderBottomLeftRadius: 0 ,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: '#FFF',
    width: WIDTH - 50,
    paddingVertical: 15,
    bottom: 0
  }
});
