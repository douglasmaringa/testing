const express = require('express');
const app = express();
let port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`)
})