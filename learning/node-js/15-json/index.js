const express = require('express');
const { products } = require('./data.js');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1> <br> <a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
    const productID = req.params;

    const singleProduct = products.find((products) => products.id === Number(req.params.productID));

    if (!singleProduct) {
        return res.status(404).send('Product does not exist');
    }

    res.json(singleProduct);
})

app.listen(3003, () => {
    console.log(`running on http://localhost:3003`);
});