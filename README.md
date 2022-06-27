[![Netlify Status](https://api.netlify.com/api/v1/badges/3063e7f4-c3a8-4e84-94a4-26ea59698d04/deploy-status)](https://app.netlify.com/sites/rest-countries-ts/deploys)

# ![Design preview for the REST Countries API with color theme switcher](./screenshot.jpg)

## Getting started

You can view a live demo over at https://rest-countries-ts.netlify.app/

To get the frontend running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm start` to start the local server (this project uses create-react-app)

### Making requests to the backend API

You can view [the API spec here](https://restcountries.com/#api-endpoints-v2)
which contains all routes & responses for the server.

## Functionality overview

**General functionality:**

- Shows all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Detailed country information on a separate page
- Toggle the color scheme between light and dark mode

**The general page breakdown looks like this:**

- Home page (URL: / )
  - Filter form
  - List of countries
  - Infinity Scroll for list of articles
  - Scroll To Top button
- Country page (URL: /country/:code )
  - Detailed country information
  - Border Countries list
