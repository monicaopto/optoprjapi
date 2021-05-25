const express = require('express');
const app = express();

app.get('/', (req,res) =>{

    res.send('Hello Monica');
});

app.get('/api/users', (req,res) =>{

    res.send('test');
});


app.listen(3000, () => console.log('Listening to port 3000....'));