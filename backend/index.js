const express = require('express');
const server = express();
const PORT = 3000;

server.get('*', (req, res) => {
    res.json({ message: 'Hello World!' });
})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));