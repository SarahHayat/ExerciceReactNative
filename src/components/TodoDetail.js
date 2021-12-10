import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

const TodoDetail = props => {
  const {route, navigation} = props;
  return (
    <SafeAreaView style={{flex: 1, margin: 20}}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>X</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Ma ToDo :</Text>
      <Text>{route.params.id}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  back: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'grey',
    width: '7%',
  },
});
export {TodoDetail};
