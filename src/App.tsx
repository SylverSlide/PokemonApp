/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import HomeView from './views/HomeView/HomeView';
import Header from './views/Header/Header';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function App(): React.JSX.Element {
  const scrollY = useRef(new Animated.Value(0)).current; // Pour suivre la position de défilement
  const offsetY = useRef(0);

  // Gestionnaire d'événement de défilement
  const handleScroll = (event: any) => {
    const newOffsetY = event.nativeEvent.contentOffset.y;
    const diff = newOffsetY - offsetY.current;
    offsetY.current = newOffsetY;

    // Si la différence de défilement est positive, l'utilisateur fait défiler vers le bas
    // Dans ce cas, nous faisons disparaître le header
    if (diff > 0) {
      Animated.timing(scrollY, {
        toValue: -110, // Définir une valeur négative pour faire disparaître le header
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else {
      // Si la différence de défilement est négative, l'utilisateur fait défiler vers le haut
      // Dans ce cas, nous faisons réapparaître le header
      Animated.timing(scrollY, {
        toValue: 0, // Définir une valeur nulle pour faire réapparaître le header
        duration: 100,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    // <SafeAreaView style={styles.safeArea}>
    //   <Animated.View
    //     style={[styles.header, {transform: [{translateY: scrollY}]}]}>
    //     <Header />
    //   </Animated.View>
    //   <ScrollView
    //     style={styles.scrollViewContent}
    //     contentContainerStyle={styles.scrollViewContainer}
    //     onScroll={handleScroll}
    //     scrollEventThrottle={70}
    //     bounces={true}
    //     alwaysBounceVertical={true}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Pour vous" component={HomeView} />
        <Tab.Screen name="Abonnements" component={HomeView} />
      </Tab.Navigator>
    </NavigationContainer>
    //   </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    backgroundColor: '#000000',
  },
  scrollViewContainer: {
    paddingTop: 100,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    elevation: 1,
  },
});

export default App;
