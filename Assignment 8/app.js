'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', function(req, res) {
    const r = parseFloat(req.params.r);
    const area = Math.PI * r * r;
    const circumference = 2 * Math.PI * r;
    res.json({ "area": area, "circumference": circumference });

// define endpoint for exercise 2 here
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);