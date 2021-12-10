/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const FlexBox: () => Node = () => {
  return (
    <SafeAreaView style={{flexDirection: 'column', flex: 1}}>
      <View style={{backgroundColor: 'red', flex: 1}} />
      <View style={styles.greenContent}>
        <View style={styles.yellowSquare} />
        <View style={styles.yellowSquare} />
        <View style={styles.yellowSquare} />
      </View>
      <View style={{backgroundColor: 'blue', flex: 3}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  yellowSquare: {
    backgroundColor: 'yellow',
    height: 50,
    width: 50,
    borderWidth: 5,
    borderColor: 'black',
  },
  greenContent: {
    backgroundColor: 'green',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default FlexBox;
