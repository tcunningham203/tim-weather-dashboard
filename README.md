# Weather Dashboard

## Description

This application uses a third party API to generate a 5 day weather forecast. Search for a city, and the 5 day weather forecast for that city will appear.

## Table of Contents
- [Link](#link)
- [Screenshot](#screenshot)
- [Usage](#usage)
- [Development](#development)
- [Credits](#credits)


## Link

This is a link to the application.

https://tcunningham203.github.io/tim-weather-dashboard/


## Screenshot

This is what the application looks like when you've used the search function.

![AppScreenshot1](/assets/screenshots/WEBSITE-SCREENSHOT.png?raw=true "Screenshot of Deployed Application- Instruction Screen")


## Usage
When you load up the site, you are presented with a largely blank screen with just a nav bar and a list of recent searches. The first time you visit the site, this box will be empty.

To use the site, you must enter a city into the search. If the API is unable to find the city, the request will not go through. Generally, I've found that it is able to consistantly get the city you want. 

Once you've entered the city, it will display some weather information about the city. In the top, largest box, it displays information about today's weather for that city. In the bottom 5 boxes, it displays weather for the next 5 days after. 

The information displayed includes the date, the temperature, the wind speed, and the humidity. Additionally, there is a small picture indicating the weather (cloudy, rainy, etc.)

On the right, the "Most Recent Searches" box will have added the city you typed into the search. This is saved on local storage, and will still be there if you leave the site and come back. You can also type a new city, and your search history will remain. If you enter the same city more than once, the previous instance of that city will be brought to the top of the list, instead of putting 2 copies of that city on the list. The list can hold up to 10 cities. You can clear the list by pressing the "Clear Search History" button at the bottom. This will clear your local storage and delete all of your city bookmarks. 


## Development
In this section, I'll briefly discuss some of the challenges and successes with the project, as well as goals for the future. 

It took a long time to finish this project because I was busy with the other major projects. It was tough to come back to because I found the API stuff to be generally confusing. However, I was able to find the solutions after doing some additional studying. 

In a future version, I'd like to figure out a way to remove the "Most Recent Searches" container when the box is empty. I'd also like to consider other features based on the additional info available in the API. 


## Credits

In an early commit, I used the HTML and CSS from my own "Javascript Code Quiz" project to have a foundation. In later commits, I removed some of that code and changed it to suit this project.

I used the Bootstrap documentation to help style the page.
I used various learning resources like Stack Overflow and W3 schools to help with random questions I had. 