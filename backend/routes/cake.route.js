const express = require('express');
const app = express();
const cakeRoute = express.Router();

// Cake model
let Cake = require('../models/Cake');

// Add Cake
cakeRoute.route('/create').post((req, res, next) => {
  Cake.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Cake
cakeRoute.route('/').get((req, res) => {
  Cake.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Cake
cakeRoute.route('/read/:id').get((req, res) => {
  Cake.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Cake
cakeRoute.route('/update/:id').put((req, res, next) => {
  console.log(req.params.id);
  Cake.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Cake
cakeRoute.route('/delete/:id').delete((req, res, next) => {
  Cake.findByIdAndRemove({ _id: req.params.id }, (error, data) => {
    console.log(req.params.id);
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = cakeRoute;
