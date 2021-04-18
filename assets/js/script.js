/*-------------------------------------https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp*/

function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode")
}

function calculateRoute() {
    //create request
    let request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING,
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
/**
 * Returns the users input from elements 'from' and 'to'
 */
function initialiseAutoComplete() {
    let autocomplete1 = new google.maps.places.Autocomplete(document.getElementById("from"));
    let autocomplete2 = new google.maps.places.Autocomplete(document.getElementById("to"));
}
/**
 * @callback initialiseAutocomeplete() - Callback for calculateRoute() function
 */
initialiseAutoComplete(calculateRoute);

function hideCalculator() {
    document.getElementById('calculatorChoiceDistance').style.display = 'none'
}
function calculatorDisplay() {
    let route = document.getElementById('calculatorChoiceRoute');
    let distance = document.getElementById('calculatorChoiceDistance');
    if (route.style.display === 'none') {
        route.style.display = 'block';
        distance.style.display = 'none'
    } else if (distance.style.display === 'none') {
        distance.style.display = 'block';
        route.style.display = 'none'
    } else {
        route.style.display = 'block';
    }
}
hideCalculator(calculatorDisplay);
/**
 *Uses the distance from input to calcute Co2 output for a journey using either petrol/diesel or km/mi as other options
 userDistance gets the value of the number the user put into the input field
 */
function calculateCarbon() {
    let userDistance = parseInt(document.getElementById("totalDistance").value);
    carbonResult.innerHTML = `<div class='userCalculator'>${(userDistance * document.getElementById('inlineFormCustomSelectPref').value * document.getElementById('inlineFormCustomSelectPref1').value).toFixed(2)} kg of CO<sub>2</sub></div>`
}
/**Sticky header transparent on scroll
 * Operates on the user scrolling and changes the background color of the 
 * header to transparent once the user scrolls
 * @function headerScroll() - Add class to header element if the user scrolls down 1
 * @function headerScroll() - Removes class from  header if user is back at the top of the page
 * @classdesc changeColor   - Changes the color of the header to transparent
 */
window.onscroll = function () { this.headerScroll() };
function headerScroll() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementById('header').classList.add('changeColor')
    } else {
        document.getElementById('header').classList.remove('changeColor')
    }
}
// Google maps
//javascript.js
//set map options
let MY_LAT_LANG = { lat: 54.3781, lng: 3.4360 };
let mapOptions = {
    center: MY_LAT_LANG,
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
//create map
let map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
//create a DirectionsService object to use the route method and get a result for our request
let directionsService = new google.maps.DirectionsService();
//create a DirectionsRenderer object which we will use to display the route
let directionsDisplay = new google.maps.DirectionsRenderer();
//bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);

/**Lazy Load Page */