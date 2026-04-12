'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', function(req, res) {
    const r = parseFloat(req.params.r);
    const area = Math.PI * r * r;
    const circumference = 2 * Math.PI * r;
    res.json({ "area": parseFloat(area.toFixed(2)), "circumference": parseFloat(circumference.toFixed(2)) });
});

// define endpoint for exercise 2 here
app.get('/hello/name', function(req, res) {
    const fname = req.query.first;
    const lname = req.query.last;
    if (!fname && !lname) {
        res.status(400).send("Missing Required GET parameters: first, last");
    }
    else if (!fname) {
        res.status(400).send("Missing Required GET parameter: first");
    }
    else if (!lname) {
        res.status(400).send("Missing Required GET parameter: last");
    }
    else {
        //res.type("text");
        res.send(`Hello, ${fname} ${lname}`);
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);