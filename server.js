const express = require('express');
const app = express();
const PORT = 3000; // You can change this port if needed

app.get('/', (req, res) => {
    res.send(`Running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});