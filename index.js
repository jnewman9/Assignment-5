// import express from 'express';

const express = require('express');

 

// declare and initialize the express server

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {

  console.log(`Starting server at ${port}`);

});

app.use(express.static('public'));

app.use(express.json({ limit: '1mb' }));

 

// when there's a request from a client for data,

app.get('/air', async (request, response) => {

  // ask the openaq api for the latest

  const aq_url = 'https://api.openaq.org/v2/latest?limit=500';

  const aq_response = await fetch(aq_url);

  const aq_data = await aq_response.json();

  // send the response back to the client

  response.json(aq_data);

});