const fs = require('fs');
const path=require("path")

exports.getForm=(req,res)=>{
    res.sendfile(path.join(_dirname + "../views/index.html"))
}
//Get a random user

exports.getUser=(req,res)=>{
    res.header("Content-Type",'application/json');

    //for syncronus function
    // rawdata = fs.readFileSync('users.json');
     
    // const userData=JSON.parse(rawdata)
    // var keys = Object.keys(userData);
    // const randomProperty = keys[Math.floor(keys.length*Math.random())]
    // const userInf = userData[randomProperty]
    // res.send(userInf)

    //for Asyncronus function
    fs.readFile('users.json',(err,rawdata)=>{
        if(err){
            res.send("not found data")
            res.end()
        }

        else{
            
            const userData=JSON.parse(rawdata)
            const keys = Object.keys(userData);
            const randomProperty = keys[Math.floor(keys.length*Math.random())]
            const userInf = userData[randomProperty]
            res.send(userInf)
            res.end() 
        }
    })

}


//Get all users
exports.getAllUsers=(req,res)=>{
    res.header("Content-Type",'application/json')
    fs.readFile('users.json',(err,rawdata)=>{
        if(err){
            res.send("not found data")
            res.end()
        }

        else{
            const userData=JSON.parse(rawdata)
            res.send(userData)
            res.end() 
        }
    })

}



exports.saveUser=(res,req)=>{
    res.header("Content-Type",'application/json')
    // const id=Number(req.body.id)
    // const gender=req.body.gender
    // const name=req.body.name
    // const contact=Number(req.body.name)
    // const address=req.body.address
    // const photoUrl=req.body.photoUrl

    // const user={
    //     id,
    //     gender,
    //     name,
    //     contact,
    //     address,
    //     photoUrl

    // }
    
    const user={
        id:7,
        name:"amena"
    }
   const rawdata = fs.readFileSync('users.json');
   const userdata= JSON.parse(rawdata)
   userdata.push(user)
   const newuserdata= JSON.stringify(userdata)


    fs.writeFileSync('users.json', newuserdata);
    
}