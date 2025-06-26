const express = require('express');
const cors = require('cors');
const { initDatabase } = require('./db');
const routes = require('./routes/productRoutes.js');

const app = express();
app.use(cors());
app.use(express.json()); // ✅ THIS must be here

// Initialize DB tables
initDatabase();

app.use('/api/products', routes);

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
