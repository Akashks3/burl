const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('app-module-path').addPath(__dirname);
const app = express();

app.use(bodyParser.json());

const mongoURI = 'mongodb://localhost:27017/studentDB'; 

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('Error connecting to MongoDB:', err));


// Routes
const routes = require('./routes/routes');
app.use('/api', routes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
