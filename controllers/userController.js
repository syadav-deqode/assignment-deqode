const userService = require('../services/userService')

module.exports.testRoute = (req, res, next) => {
  const { greet } = userService.testRoute()
  res.json(greet)
  next()
}

module.exports.addUser = async (req, res, next) => {
  const { user } = userService.addUser(req.body)
  res.status(200).json(user)
  next()
}

module.exports.getUsers = async (req, res, next) => {
  const { users } = userService.getUsers()
  res.status(200).json(users)
  next()
}

module.exports.getUserById = async (req, res, next) => {
  const { id } = req.params
  const { user } = userService.getUserById(id)
  res.status(200).json(user)
  next()
}

module.exports.deleteUser = async (req, res, next) => {
  const { id } = req.params
  const { user } = userService.deleteUser(id)
  res.status(200).json(user)
  next()
}