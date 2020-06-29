const express = require('express');
const app = express();
const port= 4000;

app.get('/', (req,res) => res.json({mensaje:"hola que tal"}));

app.use((req,res,next)=>{
    const error = new Error('Ocurrio un error');
    error.status = 404;

    next(error);
});

app.use((err, req, res,next)=>{
    res.status(err.status || 500).json({
        err:err.message || 'Algo anda mas mal que bien'
    })
});


app.listen(port, console.log('Server started'));
