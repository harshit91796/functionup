
async function isFreeUserMW(req,res,next){
    try {
        if(req.body.hasOwnProperty("isFreeAppUser")){
        next()
        }
        else{
            res.send("request is missing a mandatory header "+" isFreeAppUser")
        }
        console.log(req.headers)
    } catch (error) {
        res.status(500).json({success:false,error:error})
    }
}

async function isFreeUserMW2(req,res,next){
    console.log(req.headers.isfreeappuser)
    try {
        if(req.headers.hasOwnProperty("isfreeappuser")){
            // console.log("next")
        next()
        }
        else{
            // console.log("next else")
            res.send("request is missing a mandatory header "+" isFreeAppUser")
        }
        // console.log(req.headers)
    } catch (error) {
        res.status(500).json({success:false,error:error})
    }
}

module.exports = {isFreeUserMW,isFreeUserMW2}