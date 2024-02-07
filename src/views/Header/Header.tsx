/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function Header(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.user}
          source={require('../../assets/user.jpg')}
        />
      </View>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/x_logo.png')}
      />
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/user.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 50, // La moitié de la largeur (ou hauteur) pour obtenir un cercle
    overflow: 'hidden', // Assure que l'image est masquée si elle dépasse le cadre
  },
  container: {
    flexDirection: 'row', // Aligne les éléments horizontalement
    height: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    backgroundColor: '#000000',
    padding: 10,
  },
  text: {
    color: 'white',
  },
  tinyLogo: {
    marginHorizontal: 10, // Marge horizontale entre chaque image
    width: 30,
    height: 30,
  },
  user: {
    width: 42,
    height: 42,
  },
});

export default Header;
