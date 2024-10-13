import { useAppContext } from '@src/context';
import * as yup from 'yup';
import { AddTodoStyles } from './AddTodo.style';
import { useCallback, useState } from 'react';
import { logger } from '@src/utils';
import { db } from '@src/utils/sqlite';

const useAddTodo = () => {
  const { color, navigation } = useAppContext();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const fieldValidation = yup.object().shape({
    title: yup.string().trim().required('Please enter title'),
    description: yup.string().trim().required('Please enter description'),
  });

  const initialValues = {
    title: '',
    description: '',
    reminderDate: new Date(),
    reminderTime: new Date(),
  };

  const handleButtonSubmit = useCallback(
    async (values: typeof initialValues) => {
      logger('values: ', values);
      await db.addTask({
        title: values.title,
        description: values.description,
        is_completed: 0,
        reminder_date: values.reminderDate,
        reminder_time: values.reminderTime,
      });
      navigation.goBack()
    },
    []
  );

  const showDatePickerHandler = useCallback(() => {
    setShowDatePicker(prevState => !prevState);
  }, []);

  const showTimePickerHandler = useCallback(() => {
    setShowTimePicker(prevState => !prevState);
  }, []);

  return {
    navigation,
    styles: AddTodoStyles(color),
    handleButtonSubmit,
    initialValues,
    fieldValidation,
    showDatePickerHandler,
    showDatePicker,
    setShowDatePicker,
    showTimePicker,
    showTimePickerHandler,
    setShowTimePicker,
  };
};

export default useAddTodo;



