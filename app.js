require('dotenv').config()
const cookieParser = require('cookie-parser');
const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');

const app = express();

//for swagger documentation
const swaggerUi = require("swagger-ui-express");
const YAML = require('yamljs');
const swaggerDocument = YAML.load("./swagger.yaml")
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocument)) 

//predefined middleware
app.use(morgan('tiny'))
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser);
app.use(fileUpload());


//import all routers here
const home = require("./routes/home");
 
// custom router middleware
app.use("/api/v1",home)
  
 

//export app js
module.exports = app;
 