import express from 'express';

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/api/products', (req, res) => {
  // Logic to return products
});

app.post('/api/commission', (req, res) => {
  // Logic to calculate commission
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
