# lcar-api

This API is the result of a challenge, which consisted in creating a leasing car simulator web page.
Essentially LCar is a car leasing simulator web page, that has a form with 2 inputs, and after calculating the value, the form can be submitted. It's composed of two pages and connected to a node.js RESTfull API, called lcar-api.

API: https://lcar-api.herokuapp.com/
Website: https://andre-rd-rodrigues.github.io/lcar/

## Structure

Simple RESTfull API, with 3 requests:

1. POST calculate - receives monthDuration and amountFinanced and returns the monthly fee result
2. POST submit - mocks a submission request and returns body request values
3. GET - simple test get request that sends "Hello World" message

## Hosting

Created locally and hosted in heroku.
