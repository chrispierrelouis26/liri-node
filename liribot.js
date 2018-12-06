
var keys = require("./keys.js");
var key2 = require("./key2.js");
console.log(keys);
console.log(key2);



var inquirer = require("inquirer");
var Spotify = require('node-spotify-api');
var axios = require("axios");

var NodeGeocoder = require("node-geocoder");


var options = {
    provider: "mapquest",
    apiKey: "8AaNqGFCGZV1XG9egkkn3SjL4UMc0kUf"
};

var geocoder = NodeGeocoder(options);


inquirer
    .prompt([

        {
            type: "input",
            message: "what movie are you looking for?",
            name: "movie"
        },

        {
            type: "input",
            message: "where are you going?",
            name: "location"

        }

    ]).then(function (inquirerResponse) {


        var strName = inquirerResponse.movie;
        var address = inquirerResponse.location;
        geocoder.geocode(address, function (err, res) {
            console.log(res);
        })
        axios.get("http://www.omdbapi.com/?t=" + strName + "&y=&plot=short&apikey=trilogy").then(
            function (response) {
                console.log("The director of your movie is " +response.data.Director);

            }
        )
        var spotify = new Spotify({
            id:keys,
            secret:keys
          });
           
          spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
           
          console.log(data); 
          });
        // for ( i =2;  i < process.argv.length; i ++) {
        //     address += process.argv[i]+" ";
        // }


    });








