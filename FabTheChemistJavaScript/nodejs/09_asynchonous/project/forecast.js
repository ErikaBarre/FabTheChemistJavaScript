//le site https://darksky.net/dev est une API où on peut passer une lat et longitude et obtenir la météo du lieu
const DarkSky = require('forecast.io');

//code d'accès au site : 6b716f2bb982f1a3ae610ce6b5aa57e6

const id = "6b716f2bb982f1a3ae610ce6b5aa57e6";

//https://api.darksky.net/forecast/6b716f2bb982f1a3ae610ce6b5aa57e6/37.8267,-122.4233

//Lat: 50.7049564
//Lat: 4.6155474

//node app.js -a '75 chaussée de namur  wavre' -lat '50.7049564' lng '4.6155474'

//https://api.darksky.net/forecast/6b716f2bb982f1a3ae610ce6b5aa57e6/50.7049564,4.6155474

const request = require('request');



var forecast = (latitude, longitude, callback) => {



    console.log(`https://api.darksky.net/forecast/${id}/${latitude},${longitude}`);

    request({
            url: `https://api.darksky.net/forecast/${id}/${latitude},${longitude}`,
            json: true
        }, (error, response, body) => {
            //console.log(body);
           // console.log(response.statusCode);
            if (error) {
                callback('unable to connect to server');

                console.log('unable to connect to server');
            } else if (response.statusCode === 400) {
                callback("The given location is invalid.");

                console.log("The given location is invalid.");
            } else if (response.statusCode === 200) {
                
                
                console.log()
                callback(undefined, {
                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature

                });


            }
        }

    )
};

module.exports.forecast = forecast;
