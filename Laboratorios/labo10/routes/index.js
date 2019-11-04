var express = require('express');
var router = express.Router();
var Register = require('../models/register')

/* GET home page. */
router.get('/register', function(request, response, next) {
  console.log(request);
  Register.find((error, registers)=>{
    if(error){
      response.status(500).json({message: "error interno"})
    }
    if(registers){
      response.status(200).json(registers)
    }else{
      response.status(404).json({message: "no hay registros"})
    }
  }
  )
}
);

module.exports = router;
