import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { db } from '@src/utils/sqlite'
import { Button } from '@app/blueprints'
import useNewsList from './useNewsList'

const NewsListScreen = () => {

    const { addTodo } = useNewsList()
    useEffect(() => {
        const init = async () => {
            // await db.addTask()
            const tasks = await db.getAllTasks()
            console.log('tasks :::: ', tasks);

        }
        init()
    }, [])

    return (
        <View style={styles.container}>
            <Text>NewsListScreen</Text>
            <Button title={'Add Todo'} onPress={addTodo} titleStyle={styles.btnText} />
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