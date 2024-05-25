const express=require('express')
const mongoose=require('mongoose')
const cors= require('cors');
const bodyParser =require('body-parser');

const app =express();
const port= process.env.PORT|| 5000;

mongoose.connect('mongodb://localhost:27017/registerData', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => console.log('mongodb connected'))
.catch(err => console.error(err));

app.use(cors());
app.use(bodyParser.json());

app.use(cors({
    origin:'http://localhost:3000',
    methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials:true,

}));

const userRoute=require('./Routes')

app.use("/user",userRoute)

app.listen(port,() => console.log(`server started on port ${port}`));