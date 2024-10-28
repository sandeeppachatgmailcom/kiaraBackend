const postPanApiresult = (req,res)=>{
    try {
        console.log(req.body)
        res.json({status:true})

    } catch (error) {
        
    }
}

module.exports = postPanApiresult