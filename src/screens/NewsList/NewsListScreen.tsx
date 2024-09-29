import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { db } from '@src/utils/sqlite'

const NewsListScreen = () => {

    useEffect(() => {
        const init = async () => {
            await db.addTask()
            const tasks = await db.getAllTasks()
            console.log('tasks :::: ', tasks);

        }
        init()


    }, [])

    return (
        <View style={styles.container}>
            <Text>NewsListScreen</Text>
        </View>
    )
}

export default React.memo(NewsListScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})