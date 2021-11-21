const app = require('./app')



//creating server
app.listen(process.env.PORT,() =>{
    console.log(`server is running at PORT : ${process.env.PORT }`)  
})    