const userService = require('../services/userService')

module.exports.testRoute=(req,res,next)=>{
const {greet} = userService.testRoute()
res.json(greet)
next()
}