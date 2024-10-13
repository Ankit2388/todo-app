import React from 'react';
import { Platform, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, Text, TextInput } from '@app/blueprints';
import { Formik } from 'formik';

import useAddTodo from './useAddTodo';

const AddTodo = () => {
  const { styles, fieldValidation, handleButtonSubmit, initialValues, showDatePicker, showDatePickerHandler, setShowDatePicker, showTimePickerHandler, showTimePicker, setShowTimePicker } = useAddTodo();

  return (
    <View style={styles.container}>
      <Formik
        validationSchema={fieldValidation}
        initialValues={initialValues}
        onSubmit={handleButtonSubmit}>
        {({ resetForm, submitForm, setFieldValue, values }) => (

          <>
            <Text preset="h1">AddTodo Screen</Text>
            <TextInput
              label={'Title'}
              variant="filled"
              name={'title'}
              placeholder={'Enter Title'}
              style={styles.input}
            //  onSubmitEditing={() => {
            //    passwordRef.current?.focus();
            //  }}
            />

            <TextInput
              label={'Description'}
              variant="filled"
              name={'description'}
              placeholder={'Enter description'}
              style={styles.input}
            //  onSubmitEditing={() => {
            //    passwordRef.current?.focus();
            //  }}
            />

            <Button
              title={'Date Picker'}
              buttonContainerStyle={styles.submitBtn}
              titleStyle={styles.submitBtnText}
              onPress={showDatePickerHandler}
            // disabled={disabled}
            />
            <Button
              title={'Time Picker'}
              buttonContainerStyle={styles.submitBtn}
              titleStyle={styles.submitBtnText}
              onPress={showTimePickerHandler}
            // disabled={disabled}
            />

            {showDatePicker && (
              <DateTimePicker
                testID="datePicker"
                value={values.reminderDate}
                mode={'date'}
                minimumDate={new Date()}
                onChange={(_event: any, selectedDate: any) => {
                  setFieldValue('reminderDate', selectedDate)
                  setFieldValue('reminderTime', selectedDate)
                  setShowDatePicker(false)
                }
                }
                display={Platform.OS === 'ios' ? 'inline' : 'default'}
              />
            )}

            {
              showTimePicker && (
                <DateTimePicker
                  testID="timePicker"
                  value={values.reminderTime}
                  mode={'time'}
                  minimumDate={new Date()}
                  onChange={(_event: any, selectedDate: any) => {
                    setFieldValue('reminderTime', selectedDate)
                    setShowTimePicker(false)
                  }
                  }
                  display={Platform.OS === 'ios' ? 'inline' : 'default'}
                />
              )
            }

            <Button
              title={'Submit'}
              buttonContainerStyle={styles.submitBtn}
              titleStyle={styles.submitBtnText}
              onPress={submitForm}
            // disabled={disabled}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default React.memo(AddTodo);
