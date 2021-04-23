// Creates the theme toggle to change the color of the page from light them to dark theme and visa-versa
// Gets the whole document body to make changes
// Gets the styling created in style.css and toggles this class to each relevant element
 /**@see https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
 */
function toggleTheme() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}
/** Returns the calculated route for the user, if no route available the map will reset and an error message will show
 * @function calculateRoute() - Gets the value of the users input in the from and to ID's
 * @function calculateRoute() - travelMode sets the google maps to show a route for driving
 * @function calculateRoute() - unitSystem sets the distance that is shown to be shown in kilometers
 * @see https://github.com/sammy007-debug/distance-api/blob/main/app.js for help with code
 */
function calculateRoute() {
    let request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,

    };
    DIRECTIONS_SERVICE.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            const output = document.querySelector('#output');
            output.innerHTML = `<div>From: ${document.getElementById("from").value}.<br />To: ${document.getElementById("to").value}.<br /> Driving distance <i class='fas fa-road'></i> : ${result.routes[0].legs[0].distance.text}.<br />Duration <i class='fas fa-hourglass-start'></i> : ${result.routes[0].legs[0].duration.text}.</div>`;
            // Returns calculation for CO2 output
            const calculation = document.querySelector('#calculation');
            calculation.innerHTML = `<div>CO<sub>2</sub>: ${((result.routes[0].legs[0].distance.value / 1000) * 0.12).toFixed(2)} kg of CO<sub>2</sub> for Petrol <br>CO<sub>2</sub>: ${((result.routes[0].legs[0].distance.value / 1000) * 0.132).toFixed(2)} kg of CO<sub>2</sub> for Diesel </div>`;
            directionsDisplay.setDirections(result);
        }
        else {
            const OUTPUT = document.querySelector('#output');
            directionsDisplay.setDirections({ routes: [] });
            map.setCenter(MY_LAT_LANG);
            OUTPUT.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Could not retrieve driving distance.</div>";
        }
    });
}
// Returns the users input from elements 'from' and 'to'
function initialiseAutoComplete() {
    new google.maps.places.Autocomplete(document.getElementById("from"));
    new google.maps.places.Autocomplete(document.getElementById("to"));
}
initialiseAutoComplete(calculateRoute);
// Hides the distance calculator as soon as the page has loaded. Only showing the google route calculator
function hideCalculator() {
    document.getElementById('calculatorChoiceDistance').style.display = 'none';
}
/** Returns only one calculator when a button a pressed
 * @function calculatorDisplay() - route.style.display is set to 'none', the function will return the the other calculator
 * @function calculatorDisplay() - distance.style.display is set to 'none', the function will return the other calculator hiding the calculator the user was just on
 */
function calculatorDisplay() {
    let route = document.getElementById('calculatorChoiceRoute');
    let distance = document.getElementById('calculatorChoiceDistance');
    if (route.style.display === 'none') {
        route.style.display = 'block';
        distance.style.display = 'none';
    } else if (distance.style.display === 'none') {
        distance.style.display = 'block';
        route.style.display = 'none';
    } else {
        route.style.display = 'block';
    }
}
hideCalculator(calculatorDisplay);
//Uses the distance from input to calcute Co2 output for a journey using either petrol/diesel or km/mi as other options. 
// userDistance gets the value of the number the user put into the input field
function calculateCarbon() {
    let userDistance = parseInt(document.getElementById("totalDistance").value);
    carbonResult.innerHTML = `<div class='userCalculator'>${(userDistance * document.getElementById('inlineFormCustomSelectPref').value * document.getElementById('inlineFormCustomSelectPref1').value).toFixed(2)} kg of CO<sub>2</sub></div>`;
}
/**Sticky header transparent on scroll
 * Operates on the user scrolling and changes the background color of the 
 * header to transparent once the user scrolls
 * @this function - puts window.onscroll with with function headerScroll()
 * @function headerScroll() - Add class to header element if the user scrolls down 1
 * @function headerScroll() - Removes class from  header if user is back at the top of the page
 * @classdesc changeColor   - Changes the color of the header to transparent
 */
window.onscroll = function () { this.headerScroll(); };
function headerScroll() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementById('header').classList.add('changeColor');
    } else {
        document.getElementById('header').classList.remove('changeColor');
    }
}
headerScroll();
// MY_LAT_LANG returns the United Kingdom on the google maps
// MAP_OPTIONS returns the google maps and has a zoom of 5 on the map to show the whole of the United Kingdom
const MY_LAT_LANG = { lat: 54.3781, lng: 0.4360 };
const MAP_OPTIONS = {
    center: MY_LAT_LANG,
    zoom: 4.5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
// map returns the google map from the API
const map = new google.maps.Map(document.getElementById('googleMap'), MAP_OPTIONS);
// create a DirectionsService object from the google API which then uses the route method
const DIRECTIONS_SERVICE = new google.maps.DirectionsService();
// create a DirectionsRenderer object which we will use to display the route
let directionsDisplay = new google.maps.DirectionsRenderer();
// bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);