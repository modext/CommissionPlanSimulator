const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const staffMemberRoutes = require('./routes/staffMemberRoutes');
const commissionRoutes = require('./routes/commissionRoutes');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/staff-members', staffMemberRoutes);
app.use('/commissions', commissionRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
