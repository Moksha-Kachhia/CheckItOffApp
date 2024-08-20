

async function registerUser(req,res){
    let data = req.body; 
    console.log(data);
    res.send("success");
}

const Authcontroller = {
    registerUser
}

module.exports = Authcontroller;