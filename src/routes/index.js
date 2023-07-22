const {Router}= require("express");
const router= Router();

router.get("/", (req,res)=>{
    return res.send("Todo bien");
})

router.get("/hpta", (req,res)=>{
    return res.send("que pasa hpta");
})

module.exports=router;