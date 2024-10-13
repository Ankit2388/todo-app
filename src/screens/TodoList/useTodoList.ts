import { useAppContext } from '@src/context';

import { TodoListStyles } from './TodoList.style';
import { useCallback, useEffect } from 'react';
import { db } from '@src/utils';
import { useAppSelector, useAppDispatch, setTodo } from '@src/store';
import { useIsFocused } from '@react-navigation/native';
import { Screen } from '../../navigation/appNavigation.type';

const useTodoList = () => {
  const { color, navigation } = useAppContext();
  const { todo } = useAppSelector(state => state.todoData)
  const dispatch = useAppDispatch()
  const isFocused = useIsFocused();


  // add your code here

  const getAllTodos = useCallback(
    async () => {
      const tasks = await db.getAllTasks()
      dispatch(setTodo(tasks))
    },
    [],
  )

  useEffect(() => {
    if (isFocused) {
      console.log('called');

      getAllTodos()
    }
  }, [isFocused])

  const addTodo = () => {
    navigation.navigate(Screen.ADD_TODO);
  }

  return {
    navigation,
    styles: TodoListStyles(color),
    todo,
    addTodo,
    getAllTodos
  };
};

export default useTodoList;
