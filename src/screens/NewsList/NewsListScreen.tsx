import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { db } from '@src/utils/sqlite'
import { Button } from '@app/blueprints'
import useNewsList from './useNewsList'

const NewsListScreen = () => {

    const { addTodo } = useNewsList()

    const getAllTodos = useCallback(
        async () => {
            const tasks = await db.getAllTasks()
            console.log('tasks :::: ', tasks);
        },
        [],
    )


    // useEffect(() => {
    //     getAllTodos()
    // }, [])

    return (
        <View style={styles.container}>
            <Text>NewsListScreen</Text>
            <Button title={'Add Todo'} onPress={addTodo} titleStyle={styles.btnText} />
            <Button title={'Get todo list'} onPress={getAllTodos} titleStyle={styles.btnText} />
        </View>
    )
}

export default React.memo(NewsListScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#ffff'
    }
})