const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5500;

global.__base=__dirname
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(port,()=>console.log(`Server started at port  ${port}`));