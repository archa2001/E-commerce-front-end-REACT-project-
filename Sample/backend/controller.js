const Schema =require('./Usermodel')
const userRegister =async(req,res) => {
    try{
        const {name,email,password,confirmPassword}=
        req.body;
        if(password!=confirmPassword){
            return res.status(400).send("passwords does not match");    
        }
        const user= new Schema({name,email,password,confirmPassword})
        await user.save()
        res.status(201).send("user register success")
        
    }
    catch(error){
        console.error(error);
        res.status(500).send("registration failed");
    }
};

module.exports={
    userRegister,
}