import AsyncStorage from '@react-native-async-storage/async-storage';

import { STORAGES_KEY } from '@/constants';
import { logger } from '@/utils';


export type dataStoreType = 'string' | 'boolean' | 'number' | 'object';

export const getData = async (key: STORAGES_KEY, _type?: dataStoreType) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data) {
      const parseData = JSON.parse(data);
      return parseData;
    }
  } catch (error) {
    logger('storage getData', error);
  }
};

export const setData = async (key: STORAGES_KEY, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    logger('storage setData', error);
  }
};

export const getStorageKey = async () => {
  const keys = await AsyncStorage.getAllKeys();
  return keys;
};

export const deleteStorage = async (key: STORAGES_KEY) => {
  return await AsyncStorage.removeItem(key);
};

export const storage = {
  deleteStorage,
  getData,
  getStorageKey,
  setData,
};



export type Storage = typeof storage;
