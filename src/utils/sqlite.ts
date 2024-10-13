import { AddTodo } from '@src/models';
import * as SQLite from 'expo-sqlite';

class SQLITEhandler {
    sqliteInstance: SQLite.SQLiteDatabase | undefined;

    initDb = async () => {
        try {
            this.sqliteInstance = await SQLite.openDatabaseAsync('Todo');
        } catch (error) {
            console.log('Err in initDb ::: ', error);
        }
    };

    createTaskTable = async () => {
        try {
            const createTaskTbl = await this.sqliteInstance?.execAsync(
                `
                PRAGMA journal_mode = WAL;
                CREATE TABLE IF NOT EXISTS task (
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL, 
                description TEXT,
                is_completed INTEGER,
                created_at TEXT DEFAULT (datetime('now', 'localtime')),
                updated_at TEXT,
                reminder_date TEXT,
                reminder_time TEXT
                );
                `
            );
            console.log('createTaskTbl ::: ', createTaskTbl);
            return createTaskTbl;
        } catch (error) {
            console.log('err in createTaskTable ::: ', error);
        }
    };

    addTask = async (todo: AddTodo) => {
        const { description, title, is_completed, reminder_date, reminder_time } =
            todo;
        try {
            const addedTask = await this.sqliteInstance?.runAsync(
                'INSERT INTO task (title, description, is_completed, reminder_date, reminder_time) VALUES (?, ?, ?, ?, ?)',
                `${title}`,
                `${description}`,
                `${is_completed}`,
                `${reminder_date}`,
                `${reminder_time}`
            );
            console.log('addedTask ::: ', addedTask);
        } catch (error) {
            console.log('err in addTask ::: ', error);
        }
    };

    getAllTasks = async (): Promise<any> => {
        try {
            const allTasks =
                await this.sqliteInstance?.getAllAsync('SELECT * FROM task');
            return allTasks;
        } catch (error) {
            console.log('err in getAllTasks ::: ', error);
        }
    };

    deleteTable = async (tableName: string): Promise<any> => {
        try {
            const deletedTable = await this.sqliteInstance?.execAsync(
                `DROP TABLE IF EXISTS ${tableName};`
            );
            console.log('deletedTable ::: ', deletedTable);
        } catch (error) {
            console.log('err in getAllTasks ::: ', error);
        }
    };
}

export const db = new SQLITEhandler();
