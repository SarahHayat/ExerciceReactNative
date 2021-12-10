/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useEffect, useMemo, useState} from 'react';
import type {Node} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import TodoListItems from './TodoListItems';
import {useDispatch, useSelector} from 'react-redux';

const TodoListScreen: () => Node = () => {
  const todoList = useSelector(s => s.todoList);
  const dispatch = useDispatch();
  const [todoArray, setTodoArray] = useState(['faire les courses']);
  const [search, setSearch] = useState('');
  const [item, setItem] = useState('');

  const addTodo = useCallback(() => {
    dispatch({type: 'add', value: {title: item, id: Math.random()}});
    // setItem()
  }, [dispatch, item]);

  const removeTodo = useCallback(
    id => {
      dispatch({type: 'remove', id: id});
    },
    [dispatch],
  );

  const searchList = useMemo(() => {
    return todoList.filter(item => item.title.includes(search));
  }, [todoList, search]);

  return (
    <SafeAreaView style={{flexDirection: 'column', flex: 1}}>
      <View>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder={'rechercher..'}
          style={styles.searchInput}
        />
      </View>
      <FlatList
        data={searchList}
        renderItem={({index, item}) => {
          return (
            <TodoListItems index={index} item={item} onDelete={removeTodo} />
          );
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <TextInput
          value={item}
          onChangeText={setItem}
          placeholder={'faire les courses'}
          style={styles.addInput}
        />
        <TouchableHighlight style={styles.addButton} onPress={addTodo}>
          <Text>Ajouter</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    margin: 20,
  },
  addInput: {
    height: 40,
    width: '70%',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    margin: 20,
  },
  addButton: {
    backgroundColor: 'green',
    height: 20,
    alignSelf: 'center',
  },
});

export default TodoListScreen;
