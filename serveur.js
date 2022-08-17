const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + '/dist/animation-terminal'));

app.get('/*', function(req, res){
    res.sendFile(paht.join(__dirname+'/dist/animation-terminal/index.html'));
})

app.listen(process.env.PORT);