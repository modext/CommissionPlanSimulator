const express = require('express');
const { Sequelize } = require('sequelize');

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const sequelize = new Sequelize(process.env.DATABASE_URL);

async function testDB() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testDB();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/products', async (req, res) => {
    const products = await prisma.product.findMany();
    res.json(products);
  });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
