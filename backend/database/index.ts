import sqlite3 from 'sqlite3'
import path from 'path'
import fs from 'fs'
const mySqlite3 = sqlite3.verbose()

const db = new mySqlite3.Database(path.join(__dirname, '/tasks.db'))

db.run('CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(50), startTime VARCHAR(5), endTime VARCHAR(5));')

export default db