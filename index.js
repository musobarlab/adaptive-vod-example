const path =  require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use('/', express.static(path.join(__dirname, 'public')));

// NOTE: For best results, use a reverse proxy cache to improve performance of serving static assets.
app.use('/media', express.static(path.join(__dirname, 'media')));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));