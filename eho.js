const express = require('express');
const app = express();

app.listen(80);

app.get('/*', function(req, res){
    res.end("Express");
    console.log(req.url);
})