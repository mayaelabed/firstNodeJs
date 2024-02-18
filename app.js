const express = require ('express');
const res = require('express/lib/response');



//instance variable from express

const app = express();
//const user = require('./routes/user')

app.listen(5000,()=>
{
    console.log('listening on port 5000')
})


app.get('/',(req,res)=>
{
    res.send('<h1> welcome </h1>');
})

app.get('/auth/login', (req, res) => {
  
    res.send('<h1>Login successful!</h1>');
});

app.get('/auth/register', (req, res) => {
   
    res.sendFile(__dirname + '/public/register.html');

    
});

    
    app.get('/post/all', (req, res) => {
        res.send({
            objects: [
                { id: '1', name: 'object1' },
                { id: '2', name: 'object2' },
                { id: '3', name: 'object3' }
            ]
        });
    });
      
    app.get('/post/:id', (req, res) => {
        const request = req.params['id']
        res.send({ id: request })
    });