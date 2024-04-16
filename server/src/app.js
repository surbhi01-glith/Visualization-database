const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');
require('dotenv').config(); 

const app = express();


app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://sjha09909:test12@cluster0.ntctmcm.mongodb.net/",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api', apiRoutes);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
