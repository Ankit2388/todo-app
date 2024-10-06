import React from 'react';
import { View } from 'react-native';

import { Text } from '@app/blueprints';

import useTodoList from './useTodoList';

const TodoListScreen = () => {
  const { styles } = useTodoList();

  return (
    <View style={styles.container}>
      <Text preset="h1">TodoList Screen</Text>
    </View>
  );
};

export default React.memo(TodoListScreen);
