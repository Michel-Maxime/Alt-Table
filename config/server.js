const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());
module.exports = {
    app,
    port
}