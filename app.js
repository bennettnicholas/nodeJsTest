var express = require('express')
var figurines =require('./data/figurines')
var app = express()
var port = process.env.PORT || 3000
var figurineRouter = express.Router()

figurineRouter.route('/figurine')
   .get((req, res) => {
   	   res.json(figurines)
   });

app.use('/api', figurineRouter)


app.get('/', (req, res)=>{
    res.send('Welcome to our site')
});

app.listen(port, ()=>{
   console.log('Running on port ' + port)
});

