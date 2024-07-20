// import express
const express = require('express');
const cors = require('cors');
const app = express();

const students = [
    {id: 'alskdjf01', name: 'aaa', age: 19},
    {id: 'alskdjf02', name: 'bbb', age: 20},
    {id: 'alskdjf03', name: 'ccc', age: 21}
];

app.use(cors({
    
    // here are the config that cors may contains
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['school', 'city'], // allowed request headers
    exposedHeaders: ['abc'] // exposed response headers
    
}));
/*
// please remember that is you're using CORS, the preflight request method is "OPTIONS"
app.options('/students', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Method', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'school, city');
    res.setHeader('Access-Control-Max-Age', 7200);// server will not ask for the options in 7200ms
    res.send();
});
*/

app.get('/students', (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('abc', 'xyz');
    res.send(students);
})

app.listen(8081, () => {
    console.log('server on 8081 launched!')
});