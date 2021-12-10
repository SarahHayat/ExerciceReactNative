/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const ListName: () => Node = () => {
  let names = [
    'Sarah',
    'Emerick',
    'Guillaume',
    'Lucas',
    'Brian',
    'Jonathan',
    'Antony',
    'Florent',
    'Brian',
    'Jonathan',
    'Antony',
    'Florent',
  ];

  return (
    <SafeAreaView
      style={{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-around',
      }}>
      <FlatList
        data={names}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                margin: 10,
                height: 60,
                backgroundColor: 'lightgrey',
                justifyContent: 'center',
              }}>
              <Text style={styles.text} ref={index}>
                {item}
              </Text>
            </View>
          );
        }}
      />
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
  title: {
    fontWeight: '700',
    fontSize: 30,
  },
  input: {
    height: 50,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
  },
  text: {
    fontWeight: '700',
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default ListName;
