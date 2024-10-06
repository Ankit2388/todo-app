import { useAppContext } from '@src/context';

import { TodoListStyles } from './TodoList.style';
import { useCallback, useEffect } from 'react';
import { db } from '@src/utils';
import { useAppSelector, useAppDispatch, setTodo } from '@src/store';

const useTodoList = () => {
  const { color, navigation } = useAppContext();
  const { todo } = useAppSelector(state => state.todoData)
  console.log('todo ::: ', todo);
  const dispatch = useAppDispatch()

  // add your code here

  const getAllTodos = useCallback(
    async () => {
      const tasks = await db.getAllTasks()
      dispatch(setTodo(tasks))
    },
    [],
  )


  useEffect(() => {
    getAllTodos()
  }, [])

  return {
    navigation,
    styles: TodoListStyles(color),
  };
};

export default useTodoList;
