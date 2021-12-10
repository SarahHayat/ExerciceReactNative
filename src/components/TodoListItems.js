/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const TodoListItems = props => {
  const navigation = useNavigation();

  const goToDetail = useCallback(() => {
    console.log('test');
    navigation.navigate('TodoDetail', {id: props.item});
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        goToDetail();
      }}>
      <View
        key={props.index.toString()}
        style={{
          backgroundColor: 'lightgrey',
          padding: 10,
          margin: 5,
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <Text>{props.item.title}</Text>
        <TouchableOpacity
          style={{backgroundColor: 'red', padding: 5}}
          onPress={() => props.onDelete(props.item.id)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TodoListItems;
