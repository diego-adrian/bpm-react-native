import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from './assets/login/logoAgetic.png';

const {width: WIDTH} = Dimensions.get('window');
const PRIMARY = '#004d40';
const SECONDARY = '#00695c';
const WHITE = '#FFF';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={Logo} style={styles.LogoAgetic}></Image>
          <View style={styles.bottomHeader}/>
        </View>
        <View style={styles.footer}>
          <View style={styles.form}>
            <View style={styles.bloquesComponentes}>
              <Icon name="account-balance" size={30} style={styles.inputIcon}/>
              <TextInput
                style={styles.input}
                placeholderTextColor={'rgba(0,0,0,.2)'}
                placeholder={'NIT'}
              />
            </View>
            <View style={styles.bloquesComponentes}>
              <Icon name="account-box" size={30} style={styles.inputIcon}/>
              <TextInput
                style={styles.input}
                placeholderTextColor={'rgba(0,0,0,.2)'}
                placeholder={'Usuario'}
              />
            </View>
            <View style={styles.bloquesComponentes}>
              <Icon name="security" size={30} style={styles.inputIcon}/>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholderTextColor={'rgba(0,0,0,.2)'}
                placeholder={'password'}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -15
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  bloquesComponentes: {
    paddingVertical: 5
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 5,
    color: PRIMARY
  },
  input: {
    borderColor: `rgba(0,77,64, .2)`,
    borderWidth: 1,
    height: 40,
    paddingLeft: 40,
    width: WIDTH - 80,
    borderRadius: 4,
    color: PRIMARY
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
    zIndex: 1,
    backgroundColor: PRIMARY,
    borderColor: WHITE,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderTopWidth: 1
  },
  bottomHeader: {
    flex: 1,
    position: 'absolute',
    borderRadius: 4,
    borderBottomLeftRadius: 0 ,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: WHITE,
    width: WIDTH - 50,
    paddingVertical: 15,
    bottom: 0
  },
  footer: {
    flex: 3,
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 25,
    zIndex: 1
  },
  LogoAgetic: {
    width: 70,
    height: 70,
    resizeMode: 'contain'
  }
});
