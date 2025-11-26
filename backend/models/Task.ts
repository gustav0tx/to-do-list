import { Database, } from 'sqlite3'
import db from '../database'

class Task {
    name: string;
    startTime: string;
    endTime: string;

    static async get() {

        const query: string = 'SELECT * FROM tasks'

        return new Promise((resolve, reject) => {

            const tasks: Database = db.all(query, (err: Error, row: object) => {
                if (err) return reject(err)
                if (row) return resolve(row)
            })

        })

    }

    static async update(column: string, value: string, condition: string) {

        const query: string = `UPDATE tasks SET ${column} = ? WHERE id = ?`

        return new Promise((res, rej) => {
            
            const updated = db.run(query, value, condition, (err: Error) => {

                if (err) return rej(err) 
                else res(updated)
                
            })

        })

    }

    static async delete(condition: string) {

        const query: string = 'DELETE FROM tasks WHERE id = ?'
        
        return new Promise((res, rej) => {
            
            const deleted = db.run(query, condition, (err: Error) => {

                if (err) return rej(err)

            })

        })

    }

    constructor(name: string, startTime: string, endTime: string) {

        this.name = name
        this.startTime = startTime
        this.endTime = endTime

    }

    async create() {

        const query: string = 'INSERT INTO tasks(name, startTime, endTime) VALUES (?, ?, ?)'
        
        return new Promise((res, rej) => {
            
            const created = db.run(query, this.name, this.startTime, this.endTime, (err: Error) => {

                if (err) return rej(err)
                else res(created) 

            })

        })
    }

}

export default Task