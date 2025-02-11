const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const dbConnect = require('../Server/Config/dbConnect');
const routes = require('./Routes/routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/student', routes);

dbConnect();

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
