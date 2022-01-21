const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

module.exports = {
    app,
    port
}