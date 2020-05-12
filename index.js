// const express = require('express');
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello from Nodejs!');
});

app.listen(PORT, () => {
	console.log(`🚀 at port ${PORT}`);
});