const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running.'
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found.',
    code: 'NOT_FOUND',
    details: null
  });
});

const server = app.listen(port, () => {
  console.info(`Server listening on port ${port}.`);
});


