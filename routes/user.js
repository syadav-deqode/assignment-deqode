const express = require('express');
const router = express.Router();

const asyncHandler = fn => (req,res,next)=>{
  return Promise
  .resolve(fn(req,res,next))
  .catch(next)
} 

const userController = require('../controllers/userController');

router.get('/test',asyncHandler.testRoute)