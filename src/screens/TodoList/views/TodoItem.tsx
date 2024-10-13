import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Todo } from '@src/models'
import { Text } from '@app/blueprints'
import { boxShadow, scaled, scaledSize, scaleHeight, scaleWidth } from '@src/utils'
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'

dayjs.extend(calendar);

interface TodoItemProps {
    todoItem: Todo
}

const TodoItem = ({ todoItem }: TodoItemProps) => {
    const isCompleted = todoItem.is_completed === 0 ? "false" : "true"
    console.log('DATE :: ', todoItem.reminder_date);

    const taskDate = dayjs().calendar(dayjs(todoItem.reminder_date)
    );


    return (
        <View style={styles.card}>
            <Text>{todoItem.title}</Text>
            <Text>{todoItem.description}</Text>
            <Text>completed: {isCompleted}</Text>
            <Text>Date: {taskDate}</Text>
        </View>
    )
}

export default React.memo(TodoItem)

const styles = StyleSheet.create({
    card: {
        width: '90%',
        borderRadius: scaledSize(12),
        paddingHorizontal: scaleWidth(10),
        paddingVertical: scaleHeight(10),
        marginVertical: scaleHeight(8),
        alignSelf: 'center',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})