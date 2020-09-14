# TM-Skins
Shop project for the fans of the game called Trackmania.

Link to a deployed version: https://trackmaniaskins.web.app/

## How to use
1. Fork or download the project
2. Install the dependencies using the `npm i` command
3. Start the web server using the `npm start` command and go to http://localhost:3000/ on your browser

## Features
- Adding to cart
  - users can add items to a cart which get stored in a redux state

- Managing a cart
  - in a cart section users can increase or decrease the amount of items or delete them completely if they want
  - state keeps track of the total items price
  
- Checkout
  - users can enter their info at the checkout which then gets sent to a database
  - after submitting orders users get their tracking numbers
  
- Tracking orders
  - when you recieve a tracking number you can type it in a search bar in order to see the order's status
  - tracking gives you all of the informations about your order
  
## Future features
- Adding a fake payment system, now it isn't necessary to fill up the payment form in the checkout

- Adding descriptions for every item in the shop, now it's a mock data

## Dependencies used
- React
- react-router
- Redux
- redux-thunk
- Firebase
