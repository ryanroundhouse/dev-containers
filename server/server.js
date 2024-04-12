// Import express
const express = require('express');

// Create an express application
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// Define a route for GET requests to '/'
app.get('/', (req, res) => {
  res.send('Hello World!!');
});

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});