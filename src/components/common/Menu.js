import React, { useState, useEffect } from 'react';

import { Animated, Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import SideMenu from 'react-native-side-menu';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather'

import AsyncStorage from '@react-native-community/async-storage'

function ChildrenMenu(props) {
    logout = async () => {
      await AsyncStorage.removeItem('userToken')
      this.props.navigation.navigate('Auth')
    }

    return (
      <View style={styles.wrapper}>
        <LinearGradient colors={['#880E4F', '#C2185B', '#E91E63']} style={styles.backgroundGradient}>
          <View style={styles.closeRow}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

            <TouchableOpacity onPress={() => this.props.menuHandle()}>
              <Feather name="x" size={35} color="#fff" style={{marginRight: 10}} />
            </TouchableOpacity>
          </View>
        
          <TouchableOpacity onPress={() => this.logout()} style={styles.row}>
            <Feather name="power" size={30} color="#fff" style={{marginRight: 10}} />
            <Text size={28}>Sair</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }

export default ({ openMenu, menuHandle, navigation, userVictim }) => (
  <SideMenu
    menu={openMenu === true ? (<ChildrenMenu menuHandle={menuHandle} navigation={navigation} userVictim={userVictim} />) : null}
    bounceBackOnOverdraw
    menuPosition="right"
    disableGestures
    animationFunction={(prop, value) => Animated.timing(prop, {
      duration: 5000,
    })
    }
  />
)

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },

  row: {
    width: '100%',
    height: 50,
    marginLeft: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 10,
  },
  closeRow: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 50,
    paddingVertical: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})