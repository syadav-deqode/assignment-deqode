module.exports.testRoute=(req,res,next)=>{
res.json({msg:"Hello world! Test route"})
next()
}