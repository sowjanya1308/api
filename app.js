const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())


app.get("/bfhl",async(req,res)=>{
    res.status(200).json({"operation_code":1});
})

const isAlphabets = str => /^[a-zA-Z]*$/.test(str)
const isLower = str => /^[a-z]*$/.test(str)


app.post("/bfhl",async(req,res)=>{
    try{
        const data = req.body.data;
        var numbers = []
        var alphabets = []
        var lowercase = []

        data.map((i,v)=>{
            if(parseInt(i)){
                numbers.push(i);
            }else if(isAlphabets(i)){
                alphabets.push(i)
            }
            if(isLower(i)){
                lowercase.push(i)
            }
        })

        lowercase.sort();

        res.status(200).json({
            "is_success":true,
            "user_id":"sowjanya_13082004",
            "email":"sowjanya.21bce7947@vitapstudent.ac.in",
            "roll_number":"21BCE7947",
            numbers,
            alphabets,
            "highest_lowercase_alphabet":[lowercase[lowercase.length-1]]
        })
    }catch(error){
        console.log(error);
        res.status(404).json({"err":error})
    }
    
})

const start = async()=>{
    try{
        app.listen(7947,()=>{
            console.log("server listing on port 7947");
        })
    }catch(err){
        console.log(err);
    }
}

start()