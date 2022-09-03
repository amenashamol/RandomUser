const fs = require('fs');
const path=require("path")


const rawdata = fs.readFileSync('users.json');
const userdata= JSON.parse(rawdata)

exports.getForm=(req,res)=>{
    res.sendFile(path.join(__dirname + "/../views/submit.html"))
}

exports.updateForm=(req,res)=>{
    res.sendFile(path.join(__dirname + "/../views/update.html"))
     const {id}=req.query
     const found=userdata.find(data=>data.id===id)
     if(found){
        res.send(found)
     }
    //  else{
    //     res.status(404).json({
    //         message:"not found"
    //     })
    //  }
}
exports.deleteForm=(req,res)=>{
    res.sendFile(path.join(__dirname + "/../views/delete.html"))
    const {id}=req.query
     const found=userdata.find(data=>data.id===id)
     if(found){
        res.send(found)
     }
     
}



//Get a random user
exports.getUser=(req,res)=>{
    res.header("Content-Type",'application/json');

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

//POST method
exports.saveUser=(req,res)=>{
    res.header("Content-Type",'application/json')
    

    const id=req.body.id
    const gender=req.body.gender
    const name=req.body.name
    const contact=Number(req.body.contact)
    const address=req.body.address
    const photoUrl=req.body.photoUrl

    const user={
        id,
        gender,
        name,
        contact,
        address,
        photoUrl
     }
    
     userdata.push(user)
     const newuserdata= JSON.stringify(userdata)
   
     fs.writeFile('users.json', newuserdata,(err)=>{
        if(err){
            res.send('not added')
            res.end()
        }
        else{
            res.send(newuserdata)
            res.end()
        }
    });

}


// patch/update  method

    exports.updateUser=(req,res)=>{
        res.header("Content-Type",'application/json')
        
         const {id}=req.params
         const filter={_id:id}
        const stock = userdata.find(data => data.id === Number(id))
        
        if(stock){
            const userData=req.body
            userdata.push(userData)
            const newuserdata= JSON.stringify(userdata) 
            fs.writeFile('users.json', JSON.stringify(newuserdata), err => {
                res.send(newuserdata)
        }) 
        }
        
    
    else  {
        return res.status(404).json({
            status: "fail",
            message: "invalid ID"
        })
       
        }
    }

    //delete method
    
   exports.deleteUser=(req,res)=>{
    res.header("Content-Type",'application/json')
        
    const {id}=req.params
    const filter={_id:id}
   const stock = userdata.find(data => data.id!== Number(id))
   
   if(stock){
       
       fs.writeFile('users.json', JSON.stringify(stock), err => {
           res.send(stock)
   }) 
   }
   

else  {
   return res.status(404).json({
       status: "fail",
       message: "invalid ID"
   })
   }
   } 
    
