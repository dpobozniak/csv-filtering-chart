# CSV filtering chart

A simple dashboard, that shows metrics extacted from CSV file (http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv) for given regular dimension values (as user input) over time.

The data contains:
- one time dimension (Date)
- two regular dimensions (Campaign, Datasource)
- two metrics (Clicks, Impressions)

![App screenshot](/public/screenshot.png)

Initially, no Datasource or Campaign is selected, hence the chart should show Clicks and
Impressions over time for the entire data set. Users can then filter the dataset for both Datasources
and Campaigns.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br />
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
