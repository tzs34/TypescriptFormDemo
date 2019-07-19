# Introduction

A car company technical test. I decided to see how I could use React Hooks to address the problem of building a fairly complex form and include validation. I also wanted to get more used to TypeScript as most of my contracts / projects just used JavaScript.

# The Task

Car company X wants to introduce a new interest free car loan.
Using React
 Create a web application that will allow one of our Product Consultants to produce a
payment schedule for the new loan scheme.
 The application should allow the Product Consultant to input a vehicle price, deposit
amount, delivery date and select from 1, 2 or 3 year finance options.
 There is a minimum 15% deposit.
 For the first month add an £88 arrangement fee, the last a £20 completion fee. These values
should be easily configurable.
 Payments are due on the first Monday of each month, beginning the month after delivery.
 The completed application should calculate and display a quote showing a summary of the
loan and a payment schedule showing monthly payments with date and amount due.
 Using this API display the top six vehicles which may be affordable based on the monthly
payments
XXXXXX Mock data supplied
This will return a JSON response. We&#39;re most interested in the `searchResults` array.
 Your code should reflect clean coding principles and contain tests.

# My Solution

I wanted to try out React Hooks on the problem. Each component is 'hookefied' , that is hooks for form components return the state of the component and the component itself, (e.g. see src\components\Hooks\usePriceInput.tsx).  For validation I coded another hook which wraps the form component and accepts a validation function to test if the value of the component is valid and return an object with the value and isValid properties and a component to render in the UI. I split out each form componet hook and validation hook for each Validated component (as I call them) , just to make the code more maintainable and less cluttered.

For routing I used reach-router , mainly because it has better accessibility than react-router. Passing the form values between views is simple as reach-router allows you to add these values to the Context API.

The task isn't fully finished , but does give a flavour of my coding style and I hope you like it.

# Build and Test

# Contribute
