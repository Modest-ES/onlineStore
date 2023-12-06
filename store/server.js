const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


let items = [];

let cartItems = [];

app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/cart', (req, res) => {
  res.json(cartItems);
});

app.post('/cart', (req, res) => {
  const newItem = req.body;
  cartItems.push(newItem);
  res.json(newItem);
});

app.delete('/cart/:id', (req, res) => {
  const itemId = req.params.id;
  cartItems = cartItems.filter(item => item.id !== itemId);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:${PORT}");
});