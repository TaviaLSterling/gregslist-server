const router = require('express').Router()
let Car = require('../models/Car')

router.post('/', (req,res,next)=>{
    //pizza you're trying to add
  let newCar = req.body
  Car.create(newCar)
  .then(car => {
      res.send(car)
  })
})

router.delete('/:id',(req,res,next) =>{
    Car.findByIdAndRemove(req.params.id)
    .then(oldDeletedCar => {
        res.send('Deleted')
    })
})


module.exports = router