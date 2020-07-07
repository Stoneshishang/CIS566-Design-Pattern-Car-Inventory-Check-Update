//jshint esversion: 6
const request = require('request');
const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const async = require('async');
var path = require('path');

const app = express();

class Dealer(username, password){
  //method for login and creditial validation
}

class Customer(search){

  search.addEventListener("input", function(e){

    const url = 'http://localhost:3000/cars';

    request(url,function(err, response,data){

    var parsedJSON = JSON.parse(data);
      for(var i=0;i<parsedJSON.length;i++){
        price = parsedJSON[i].price;  // pick data out of JSON array of Objects
        condition = parsedJSON[i].condition;
        year = parsedJSON[i].year;
        maker = parsedJSON[i].maker;
        color = parsedJSON[i].color;
        model = parsedJSON[i].model;
        millage = parsedJSON[i].millage;
        }

        if(document.getElementByName('condition') == condition && document.getElementByName('year') == year
      && document.getElementByName('maker') == maker
    && document.getElementByName('color') == color
    && document.getElementByName('model') == model){
          res.send("<h1>Your vehicle is in stock!</h1>");
        }else{
        console.log(res.statusCode, "vehicle is not avaliable!");
      }
  });

  });
};
