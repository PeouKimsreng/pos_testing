const sqlite3 = require('sqlite3').verbose();
const pathUtil = require('path');
const db = new sqlite3.Database(pathUtil.resolve(__dirname, 'pos.sqlite'));

const initDatabase = () => {
  db.run(`CREATE TABLE IF NOT EXISTS Products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL,
    stock_qty INTEGER
  )`);
};

module.exports = { db, initDatabase };
