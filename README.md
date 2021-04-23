# **CO2 Calculator**
## **Purpose of Website**
All the CO2 trip calculators I have used all require you to know how far you have travelled. 
I find this annoying because this means I now need to go onto another application and find out my trip’s length. 
This site now uses the google maps API to get trip details within one application. 
Meaning now the visitor does not need to leave the site to go to another application for site, 
they can get everything they need in one place. 

Stopping visitors from leaving the site to find trip distance will lead to better visitor interaction with the site. 
If they saw that they had to go and find the distance of their trip this may put them off from even using the site,
because they may see it as to much effort.

Another reason behind this website is to show people the impact they have on the planet, 
and to show them how they can help by showing links to other sites that help with CO2 emissions.
Some sites that I have seen show the total cost of the trip and then show what that person. 
can by to offset their single trip. I think this is the wrong way to go about it because this means that person. 
now needs to keep coming back and calculating each trip they take. I have tried to find websites that offer subscriptions.
that cost a certain amount each month and this means that person does not need to constantly worry about calculating each trip.
This site is intended to start a person journey to helping the environment and opening their eyes to new ways to help the environment.
with a simple subscription. Millions of people have subscriptions to Amazon and Netflix, but these subscriptions help our planet.

---
## **Wireframes**
### Desktop
![Wireframes for desktop]()
### Mobile
![Wireframes for mobile]()
___
## **Typography & Color Scheme**
### Typography

1. Main Font - B612

1. Backup Font - Lora

1. Last Ditch Font - Sans-serif

### Color Scheme - Dark mode
**Header:** 
* Background Color - 65CCB8

* Font Color - 182628

**Body:**

* First Paragraph & Emissions Offsetting links - 182628

* First Paragraph & Emissions Offsetting links Font Color - F2F2F2

* Calculator Background - 3B945E

* Calculator Header Font Color - F2F2F2

* Calculator Fuel type, co2 per mile, start and end location Background Color - F2F2F2

* Calculator Fuel type, co2 per mile, start and end location Font Color - 182628

* Calculator Results DIV Background Color - 182628

* Calculator Results DIV Font Color - 57BA98

**Footer**

* Background Color - 182628

* Contact Us and Social Links Color - 65CCB8


### Color Scheme - Light mode
**Header** 
* Background Color - F2F2F2

* Font Color - 182628

**Body:**
* First Paragraph & Emissions Offsetting links - 3B945E

* First Paragraph & Emissions Offsetting links Font Color - F2F2F2

* Calculator Background - F2F2F2

* Calculator Header Font Color - 182628

* Calculator Fuel type, co2 per mile, start and end location Background Color - 3B945E

* Calculator Fuel type, co2 per mile, start and end location Font Color - F2F2F2

* Calculator Results DIV Background Color - 3B945E

* Calculator Results DIV Font Color - 182628

**Footer**
* Background Color - 3B945E

* Contact Us and Social Links Color - F2F2F2
---
## **User Stories**
* As a user I want to view a map showing my trip from point A to point B.

* As a user I want to see my CO2 emissions for the given route on the map from point A to point B. 

* As a user I want to have to option to select either petrol or diesel for my cars fuel type.

* As a user I want to have suggested places where I can try and offset my CO2 emissions from my car. 

* As a user I want the option of Dark and Light mode for the site.
---
## **Features**
**Home Page Header**

* CO2 Calculator Logo on the left, when clicked will link back to home page.

* Dark and Light mode toggle switch on the right of the header. Lets user switch the color theme from a dark theme to a light theme.

**Calculator Introduction**

A paragraph introducing the calculator with a brief explanation on our impact on the planet.

**CO2 Calculator**

* Left Side : Dropdown menu for the user to select their fuel type, the two options will be petrol and diesel.

* Left Side : Below the fuel type will be a text area that shows the CO2 per mile of the selected fuel.

* Right Side : In line with fuel type will be 'Start Location', the user will input their start location in this area.

* Right Side : Below 'Start Location' will be 'End Location', the user will input where their journey will end.

* Middle : Below these 4 elements will be a 'Submit' button.

**Google Maps**

This will show the Google Directions API, the input from the Start and End locations will be shown here with the route showing. 

**Calculator Results**

* Middle : 'Trip Distance' will be shown below the google maps.

* Middle : 'Total CO2 for Trip' is below 'Trip Distance'. This shows the total CO2 emitted from the trip.

**CO2 Emissions Offsetting Initiatives**

*Desktop :*
* Left Side : All the logos for selected offsetting initiatives will be shown, the logos when clicked will link to the website.

* Right Side : A description of each initiative, a link will also be shown for the website at the end of the text. 

*Mobile :*

Middle : Logo for each initiative will be shown with a snippet of text shown as a preview. Users will click on an image and it will open.
an accordion of all the text explaining the initiative. Link will be shown at the end of the text to the website.

**Footer**
* Right Side : All social media links

---
## **Future Features**

1. Show all Shell petrol stations along the visitor’s route as they are the only petrol company in the UK that offsets 
customers fuel purchases. If another company offers this option, they would be added to the routes.

1. Show the option for electric car and this selection will show all charging stations along the visitor’s route.
The charging stations will also have a rating for how environmentally friendly the source of the electricity is. 
If the electricity comes from green energy sources such as wind turbines or Hydroelectricity would have higher ratings
than electricity sourced from coal. 

1. Offer visitors the option to open their own account. This account will allow them to save their trips. Once a trip is saved
the total CO2 emissions from that trip is stored and when another trip is saved the CO2 emissions from both trips are added together.
The total emissions from all the user’s trips are shown at the bottom of the users account page with the saved trips.

---
## Deployment 
 When on GitHub navigate to [CO2-Calculator-MS2](https://github.com/kylelawrencedev/CO2-Calculator-MS2) repository. Once at the repository under the name will be 'Settings', which must be clicked.
* When on the settings pages, Start to scroll down.
* While scrolling look out for the heading "Pages"
* Under the heading click on the drop-down menu under source. 
* In the dropdown menu select either 'None' or 'Branch' as your publishing source.
* Once selected, you can select a folder for your publishing source. This can be either "/(root)" or "/docs".
* Then click save.

"If you choose the /docs folder on any branch as your publishing source, then later remove the /docs folder from that branch in your repository, your site won't build and you'll get a page build error message for a missing /docs folder." 
[Configuring a publishing source](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

# Cloning my repository

* Go to [CO2-Calculator-MS2](https://github.com/kylelawrencedev/CO2-Calculator-MS2) repository
* Above where all the files are listed there will be a button that says "Code"
* When clicked a drop-down menu will appear. 
* Click on "Open with GitHub Desktop"

[Cloning a repository from GitHub to GitHub Desktop](https://docs.github.com/en/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop/cloning-a-repository-from-github-to-github-desktop)
## **Technology**
### 1. Languages
* HTML5
* CSS3
* JavaScript
### 2. Integration
* [Bootstrap](https://getbootstrap.com/)
* [FontAwesome](https://fontawesome.com/)
* [Google Fonts](https://fonts.google.com/) 
* [Google Maps API](https://developers.google.com/maps)
* [JavaScript Library/jQuery](https://jquery.com/)
* [Polyfill](https://polyfill.io/v3/)
### 3. Version Control & Repository
* [GitHub](https://github.com/)
* [Gitpod](https://www.gitpod.io/)
### 4. Other 
* [CSS Autoprefixer](https://autoprefixer.github.io/)
* [JSHint](https://jshint.com/)
* [W3C HTML Validator](https://validator.w3.org/)
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
---
## **Credits**
https://www.brainyquote.com/quotes/greta_thunburg_1088216?src=t_emissions (greta quote)
https://www.subpng.com/png-bctacm/ shell logo
https://thereverend.co.uk/blog/wp-content/uploads/2019/01/Bulb-logo-pink.png bulb logo
