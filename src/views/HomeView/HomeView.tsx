import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const images = {
  lugia: require('../../assets/lugia.png'),
};

function HomeView(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeView working !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    height: 5000,
    marginTop: 20,
    backgroundColor: '#000000',
  },
  text: {
    color: 'white',
  },
  tinyLogo: {
    width: 250,
    height: 250,
  },
});

export default HomeView;
