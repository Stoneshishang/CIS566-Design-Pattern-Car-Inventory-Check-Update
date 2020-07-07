//jshint esversion: 6
const request = require('request');
const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const async = require('async');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


//Create MongoDB database for storing carInfo
mongoose.connect("mongodb://localhost:27017/carDealerDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const carSchema = ({
  price: Number,
  condition: String,
  year: Number,
  maker: String,
  color: String,
  model: String,
  millage: Number
});

const Car = mongoose.model("Car", carSchema);

app.route("/cars/:updateCarInventroy")

.get(function(req, res) {
  Car.find(function(err, foundCars) {
    if (!err) {
      res.send(foundCars);
    } else {
      res.send(err);
    }
  });
})

.post(function(req, res) {

  const newCar = new Car({
    price: req.body.price,
    condition: req.body.condition,
    year: req.body.year,
    maker: req.body.maker,
    color: req.body.color,
    model: req.body.model,
    millage: req.body.millage
  });

  newCar.save(function(err) {
    if (!err) {
      res.send("Successfully added a new car!");
    } else {
      res.send(err);
    }
  });
})

.patch(function(req, res) {
  Car.update(
    {price: req.params.updateCarInventroy},
    {$set: req.body},
    function(err) {
      if (!err) {
        res.send("Successfully updated a new car!");
      } else {
        res.send(err);
      }
    }
  );
})
;


app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
});
