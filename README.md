# Weather App

## About

This project is about building a weather application.

## Goals

- Learning how to work with asynchronous code.
- Learning how to implement asynchronous code using **Async** and **Await**.
- Learning how to handle an error after a **Promise** is rejected.
- Learning how to work with **API**s.
- Learning how to use an API by reading its documentation.
- Learning how to use the error handling mechanism in an API.

# Other concepts used

- HTML Forms
- CSS Flexbox
- CSS Grid
- CSS Transitions
- CSS Animations
- DOM Manipulation
- Event Listeners
- Form Validation
- Fetch API

# Challenges

After receiving the weather forecast, in addition to displaying the current forecast, the forecast for the next three days can also be viewed. By clicking on each day, you can see more details about that day. I have used the `div` element to display each day, which contains several elements. At first, I had used the `target` property on the `click` event, which caused that with each click on a day, one of the descendant elements was returned as the target, and not the `div` element itself, which represents the day. To solve this challenge, I used Google search and found that if I want to return the element to which the `click` event is attached and not a descendant element, I should use the `currentTarget` property instead of `target` property.

# Credits

This project uses API provided by [WeatherAPI.com](https://www.weatherapi.com).