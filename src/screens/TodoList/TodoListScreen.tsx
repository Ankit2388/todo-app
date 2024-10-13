import React, { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import useTodoList from './useTodoList';
import { Todo } from '@src/models';
import TodoItem from './views/TodoItem';
import { Button } from '@app/blueprints';

const TodoListScreen = () => {
  const { styles, todo, addTodo, getAllTodos } = useTodoList();

  const renderTodoList = useCallback(
    ({ item }: { item: Todo }) => {
      return (
        <TodoItem todoItem={item} />
      )
    },
    [],
  )

  return (
    <View style={styles.container}>
      <FlatList data={todo} keyExtractor={(item) => item.id.toString()} renderItem={renderTodoList} />
      <Button title={'Add Todo'} onPress={addTodo} titleStyle={styles.btnText} />
      <Button title={'Get todo list'} onPress={getAllTodos} titleStyle={styles.btnText} />
    </View>
  );
};

export default React.memo(TodoListScreen);
