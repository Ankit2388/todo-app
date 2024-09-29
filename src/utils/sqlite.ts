import * as SQLite from 'expo-sqlite';

// export const db = SQLite

// export const initDb = async() => {
//     try {
//         const initDbRes = await db.openDatabaseAsync('Todo')
//         console.log('initDbRes :: ', initDbRes);
//         // return initDbRes
//     } catch (error) {
//         console.log('Err in initDb ::: ', error);

//     }
// }

// export const createTaskTable = async() => {
//     try {
//         const createTableRes = await db.execAsync
//         console.log('createTableRes ::: ', createTableRes);

//     } catch (error) {
//         console.log('err in createTaskTable ::: ', error);

//     }
// }

class SQLITEhandler {
    sqliteInstance: SQLite.SQLiteDatabase | undefined
    // constructor(sqliteInstance?: SQLite.SQLiteDatabase){
    //     this.sqliteInstance = sqliteInstance
    // }
    // static async createInstance() {
    //     const data = await db.openDatabaseAsync('Todo')
    //     return new SQLITEhandler(data);
    //   }

    // constructor(){
    //     this.sqliteInstance = null
    // }

    // static async createInstance() {
    //     const data: SQLite.SQLiteDatabase= await db.openDatabaseAsync('Todo')
    //     return new SQLITEhandler(data);
    //   }
    initDb = async () => {
        try {
            this.sqliteInstance = await SQLite.openDatabaseAsync('Todo')
        } catch (error) {
            console.log('Err in initDb ::: ', error);

        }
    }

    createTaskTable = async () => {
        try {
            const createTaskTbl = await this.sqliteInstance?.execAsync(
                `
                PRAGMA journal_mode = WAL;
                CREATE TABLE IF NOT EXISTS task (
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL, 
                description TEXT,
                is_completed INTEGER DEFAULT 0,
                created_at TEXT DEFAULT (datetime('now', 'localtime')),
                updated_at TEXT,
                reminder_date TEXT,
                reminder_time TEXT
                );
                `
            )
            console.log('createTaskTbl ::: ', createTaskTbl);
            return createTaskTbl
        } catch (error) {
            console.log('err in createTaskTable ::: ', error);

        }
    }

    addTask = async () => {
        try {
            const addedTask = await this.sqliteInstance?.runAsync('INSERT INTO task (title, description) VALUES (?, ?)', 'Title-1', 'my description');
            // console.log('addedTask ::: ', addedTask);

        } catch (error) {
            console.log('err in addTask ::: ', error);

        }
    }

    getAllTasks = async (): Promise<any> => {
        try {
            const allTasks = await this.sqliteInstance?.getAllAsync('SELECT * FROM task')
            // console.log('allTasks ::: ', allTasks);
            return allTasks
        } catch (error) {
            console.log('err in getAllTasks ::: ', error);
        }
    }
}

export const db = new SQLITEhandler();
