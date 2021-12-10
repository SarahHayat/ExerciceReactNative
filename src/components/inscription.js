/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useEffect, useMemo, useState} from 'react';
import type {Node} from 'react';
import {Avatar} from 'react-native-elements';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
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

const Inscription: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (password !== '' && password.length < 3) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [password]);

  useMemo(() => {
    if (password !== confirmPassword) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [password, confirmPassword]);

  const onSendPress = useCallback(() => {
    console.log(name);
    let message = `Bonjour ${name} ${lastName}, votre mot de passe est ${password}`;
    return Alert.alert('Inscription', message);
  }, [name, lastName, password]);
  return (
    <SafeAreaView
      style={{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-around',
      }}>
      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        <Text style={styles.title}>Inscription</Text>
        <Avatar
          rounded
          size={'xlarge'}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
          }}
        />
        <TextInput
          style={styles.input}
          placeholder={'Prénom'}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder={'Nom'}
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          secureTextEntry={true}
          placeholder={'Mot de passe'}
          value={password}
          onChangeText={setPassword}
          style={
            isError
              ? [styles.passwordError, styles.input]
              : [styles.passwordClean, styles.input]
          }
        />
        <TextInput
          secureTextEntry={true}
          style={
            isError
              ? [styles.passwordError, styles.input]
              : [styles.passwordClean, styles.input]
          }
          placeholder={'Confirmation du mot de passe'}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.button} onPress={onSendPress}>
          <Text>Envoyer</Text>
        </TouchableOpacity>
      </View>
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
  passwordClean: {
    borderWidth: 2,
    borderColor: 'black',
  },
  passwordError: {
    borderWidth: 2,
    borderColor: 'red',
  },
});

export default Inscription;
