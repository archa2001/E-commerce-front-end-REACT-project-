const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()


app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/sampleDB")
    .then(() => {
        console.log("Database connected")
    })
    .catch(err => console.log(err))

const studentSchema = new mongoose.Schema({
    name: String,
    address: String
})
const Student = mongoose.model("student", studentSchema)

app.post("/api/student", async (req, res) => {

    try {
        const { name, address } = req.body
        const student = new Student({ name, address })
        await student.save()
        res.send("Data saved successfully")
    } catch (error) {
        console.log(error);
    }

})

app.get("/api/student", async (req,res)=>{
    try{
        const studentData=await Student.find()
        res.json(studentData)
        console.log(studentData);
    }
    catch(err){
        console.log(err);
    }
})

app.listen(5000, () => {
    console.log("Server running at 5000");
})