/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {MyStack, MyTab} from './src/navigation';
import Inscription from './src/components/inscription';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <MyTab />
    </Provider>
  );
};

export default App;
