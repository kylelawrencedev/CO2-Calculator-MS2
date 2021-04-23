# TESTING
## General: Testing of Live Site
### Navbar & Header
* Clicked on Logo image and page reloaded
* Clicked the toggle switch for the light/dark theme and the colour scheme of the site changed to the respective colours
* Scrolled down and header was sticky
* On scroll the header became transparent
* When the header goes back the the top of the page it goes back to the original color
---
### All links on site 
#### *External*
* Clicked all links on the site and they opened up in a new window to the respective site
* Added noreferrer to all links due to Google Lighthouse suggesting the links needed it. Adding this helps improve the security of the links and the site
---
### Route Calculator
* Clicked Switch CO2 Calculator button and it switched from being the route calculator to the distance calculator. Also hides the other calculator.
* Started typing into the origin text box and some results showed up relevant to what I was typing. Start typing 'Lo' and suggestions such as 'Los Angeles' and'London' showed up. Showing the autocomplete was working for origin text box.
* Did the same test for the destination text box as I did for the origin text box and got the same result. Showing that autocomplete was working for destination text box also.
* Put my origin as 'London' and destination as 'Edinburgh' and clicked the Calculate CO2 button. Route details showed up below the button with the total distance and time showing. On the google map it showed my route highlighted and below the map my CO2 was shown for petrol and diesel.
---
### Distance Calculator
* Typed in a distance of 50 and then selected 'Kilometers' for distance type and 'Petrol' for fuel type. Noticed the CO2 was not showing. Looked at code and noticed a queryselector had been put into the calculateCarbon() function. Removed queryselector and the results showed.
* Expected kg of CO2 for a 10-mile trip using Petrol: 10(users input) x 1.60934 (miles in 1 km) x 0.12 (kg of CO2 per km) = 1.93 Results fixed to 2 decimals
* Changed choice of fuel from petrol to diesel without refreshing the page and the results were updated
---
## Responsive Pages
* DevTools - Screen sizes tested widths: Galaxy Fold(280px) | Moto 4G(360px) | Pixel 2(411px) | iPhone 6/7/8(375px) | iPad(768px) | iPad Pro(1024px) | Surface Duo(540px) | And responsive option |
* Physical Devices - Samsung a70 | iPhone7 | Huawei p20 | Asus Duo Zenbook
### Responsive Testing
* Tested resposiveness and noticed that on devices between 400px and 420px the carousel-caption was pushed to far to the left. Fixed this bug by adding a new @media (max-width:420px)
* Site was responsive on all devices from the Samsung Fold to the Surface Duo
* Opened site in Opera & Firefox and all the same functions were available.
* Used Google chromes responsive device tool found in the Inspect page. When drag down certain content was hidden due to it taking up too much space. Content such as the Greta quote, and making the carousel-caption content less. This means the screen looks less busy and is easier on the user’s eye.
---
# Testing Writeup
## Websites used to Validate Code
### W3C HTML & CSS
#### HTML 
Error for using lists when not needed for the calculator button
* Made an unordered list and placed a div within that div. Changed all the lists to divs
Error for putting loading='lazy'
* Put loading='lazy' into the div below the image by accident. Moved it to the img
Got an error for the social links in the footer
* I had put all the social media icons into a 'ul' and then put another 'ul' inside the first which is not allowed. I had to put the first three icons into a unordered list and the next three into their own unordered list. With 'li' within each unordered list 3 times.
#### CSS
All code passed without any changes needed
### JSHint 
Pasted code into JSHint and got several warnings:
* I had forgot to put in a ';' in several places
* autocomplete1 and autocomplete2 were not needed as they were not used anywhere else in the code, so they were removed
* Got two warnings for the use of 'new'. This is needed for the google maps API autocomplete. When removed the autocomplete function does not work.
* Undefined Variables: carbonResult was undefined. Created const CARBON_RESULT with a querySelector for id='carbonResult'

