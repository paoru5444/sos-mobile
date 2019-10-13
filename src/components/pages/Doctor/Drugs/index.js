import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Text } from '../../../common/Text'

export function drugsOptions({ navigate }) {
  return {
    title: 'Alimentos',
    headerTintColor: '#f2f2f7',
      headerStyle: {
        backgroundColor: '#215583'
      },
      headerTitleStyle: {
        color: '#f2f2f7',
      },
  }
}

function Drugs() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.banner}>
        <Image source={require('../../../../assets/images/medicine.png')} style={styles.image} />
      </View>

      <View style={styles.row}>
        <Text color="#2c2c2c">Teste</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  banner: {
    width: '100%',
    height: '20%',
    backgroundColor: "#215583",
    padding: 0,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 140,
    height: 140,
    marginRight: 10,
    top: 20,
  },
})

export default Drugs;