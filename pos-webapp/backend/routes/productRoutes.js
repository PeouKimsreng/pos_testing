const express = require('express');
const router = express.Router(); // Use consistent instance
const { db } = require('../db');

//router.use(express.json()); // ✅ Add this middleware here

router.get('/', (req, res) => {
  db.all('SELECT * FROM Products', [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  console.log('Received request body:', req); 
  console.log('Received request body:', req.body); // Log the request body
  const { name, price, stock_qty } = req.body;

  if (!name || price == null || stock_qty == null) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  db.run(
    'INSERT INTO Products (name, price, stock_qty) VALUES (?, ?, ?)',
    [name, price, stock_qty],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ id: this.lastID });
    }
  );
});

module.exports = router;
