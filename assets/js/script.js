/*-------------------------------------https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp*/
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode")
}

// Google maps
//javascript.js
//set map options
var myLatLng = { lat: 54.3781, lng: 3.4360 };
var mapOptions = {
    center: myLatLng,
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP

};

//create map
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

//create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();

//create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

//bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);


//define calcRoute function
function calculateRoute() {
    //create request
    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.METRIC,

    }
    //pass the request to the route method
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

            //Get distance and time
            const output = document.querySelector('#output');
            output.innerHTML = `<div>From: ${document.getElementById("from").value}.<br />To: ${document.getElementById("to").value}.<br /> Driving distance <i class='fas fa-road'></i> : ${result.routes[0].legs[0].distance.text}.<br />Duration <i class='fas fa-hourglass-start'></i> : ${result.routes[0].legs[0].duration.text}.</div>`;

            // Calculate CO2
            // My own code
            calculation = document.querySelector('#calculation');
            calculation.innerHTML = `<div>CO<sub>2</sub>: ${((result.routes[0].legs[0].distance.value / 1000) * 0.12).toFixed(2)} kg of CO<sub>2</sub> for Petrol <br>CO<sub>2</sub>: ${((result.routes[0].legs[0].distance.value / 1000) * 0.132).toFixed(2)} kg of CO<sub>2</sub> for Diesel </div>`;

            //display route
            directionsDisplay.setDirections(result);
        }
        else {
            //delete route from map
            directionsDisplay.setDirections({ routes: [] });
            //center map in London
            map.setCenter(myLatLng);

            //show error message
            output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Could not retrieve driving distance.</div>";
        }
    });
}
//create autocomplete objects for all inputs

let autocomplete1 = new google.maps.places.Autocomplete(document.getElementById("from"));
let autocomplete2 = new google.maps.places.Autocomplete(document.getElementById("to"));
/**
 * Submits users inputs for calculator to show results
 */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("option");
    // get attributes from selection options
    for (let button of buttons) {
        button.addEventListener("click", function () {
            document.getElementById('').getAttribute("data-type") === "submit"; {
                calcCarbon();
            }
        });
    }
});
/**
 *Uses the distance from input to calcute Co2 output for a journey using either petrol/diesel or km/mi as other options
 userDistance gets the value of the number the user put into the input field
 */
function calculateCarbon() {
    let userDistance = parseInt(document.getElementById("totalDistance").value);
    carbonResult.innerHTML = `<div class='userCalculator'>${(userDistance * document.getElementById('inlineFormCustomSelectPref').value * document.getElementById('inlineFormCustomSelectPref1').value).toFixed(2)} kg of CO<sub>2</sub></div>`
}
