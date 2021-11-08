const express = require('express');
const router = express.Router();

const asyncHandler = fn => (req,res,next)=>{
  return Promise
  .resolve(fn(req,res,next))
  .catch(next)
} 

const userController = require('../controllers/userController');

router.get('/test',asyncHandler.testRoute)
// Add user
router.post('/', asyncHandler(userController.addUser))
// Get all the users
router.get('/', asyncHandler(userController.getUsers))

module.exports = router