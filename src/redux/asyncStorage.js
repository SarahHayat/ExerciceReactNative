import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async data => {
  const json = JSON.stringify(data);
  await AsyncStorage.setItem('myData', json);
};

const loadData = async () => {
  const json = AsyncStorage.getItem('myData');
  return JSON.parse(json);
};
