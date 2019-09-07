const express=require('express')
const items=require('./routes/api/items');
const user=require('./routes/api/user');
const auth=require('./routes/api/auth')
const mongoose=require('mongoose')
const bodyParser=require('body-parser');
const config=require('config');

const app=express()
app.use(bodyParser.json())
const db=config.get('mongoURI')
mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true
})
.then(()=>console.log('mongodb connected'))
.catch(err=>console.log(err))
const PORT =process.env.PORT || 5000
app.use('/api/items',items)
app.use('/api/users',user)
app.use('/api/auth',auth)
app.listen(PORT,()=>{
    console.log(`Port is connected on ${PORT}`)
})