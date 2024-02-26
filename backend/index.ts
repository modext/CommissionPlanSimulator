import express from 'express';

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/api/products', (req, res) => {
});

app.post('/api/commission', (req, res) => {
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
