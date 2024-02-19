const express = require('express');
const app = express();
const { products } = require('./data.js');

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    })
    res.send(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params;

    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    );

    if (!singleProduct) {
        return res.status(404).send('<h1>Product does not exist</h1>');
    }

    res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('hello world');
});

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        res.status(404).send('<h1>Any product does not match</h1>')
    }
    // or instead...
    // if (sortedProducts.length < 1) {
    //     res.status(404).json({ success: true, data: [] });
    // }
    res.status(200).json(sortedProducts);
});


app.listen(3030, () => {
    console.log(`app is running on http://localhost:3030`);
});