// NewsListScreen

import React, {useState} from 'react';
import {SafeAreaView,  StatusBar, View} from 'react-native';


import { Text } from '@app/blueprints';


const NewsListScreen = () => {
  
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <View>
          <Text preset='h1'>Test</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default NewsListScreen;