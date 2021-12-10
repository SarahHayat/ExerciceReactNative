import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TodoListScreen from './components/TodoListScreen';
import {TodoDetail} from './components/TodoDetail';
import Inscription from './components/inscription';
import FlexBox from './components/FlexBox';
import ListName from './components/ListName';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TodoList" component={TodoListScreen} />
        <Stack.Screen
          name="TodoDetail"
          component={TodoDetail}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="TodoList"
          component={TodoListScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="list" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Inscription"
          component={Inscription}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="person-add" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="FlexBox"
          component={FlexBox}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="cube" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="ListName"
          component={ListName}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="list-circle" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export {MyStack, MyTab};
