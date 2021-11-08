const userService = require('../services/userService')

module.exports.testRoute=(req,res,next)=>{
const {greet} = userService.testRoute()
res.json(greet)
next()
}

module.exports.addUser = async (req, res, next) => {
  const { user } = userService.addUser(req.body)
  res.status(200).json(user)
  next()
}
