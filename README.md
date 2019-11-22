# Bikebus 🚲 🚌

Welcome to the Bikebus Github repo! This repo contains the codebase for the marketing site

## Background

This marketing site is made to compliment the new branding assets. It is made with React (with styled components) and Gatsby for the frontend and Takeshape for the backend CMS

## Getting Started

1. Clone the repository:

```bash
git clone git@github.com:Scout-NU/bikebus-site.git
```

2. Change directories:

```bash
cd bikebus-site
```
3. Set up environment variables

In the project directory is a file called `.env_example`. This holds all of the necessary environment variables to create this project, including the Takeshape repo name, access token, and Google Analytics tracking code.

Copy the file and add the values to the variables.

```sh
cp .env_example .env
```
```sh
# In .env
TAKESHAPE_PROJECT=XXXX
TAKESHAPE_TOKEN=XXXX
ENABLE_GATSBY_REFRESH_ENDPOINT=1
```

4. Install the npm modules

```bash
# Inside the project directory
npm install
```

Run the server

```bash
npm start
```

It will likely start on http://localhost:8000

##Usage

### Updating CMS
Thanks to Gatsby's intense caching, when updating any data in the Takeshape CMS interface, you must do two things for the updated content to show up in your GraphQL queries:

1. **Publish the document on Takeshape!** This won't affect any current builds of the marketing site, as all of the data is queried and cached on build of the site.

2. **Restart the development server!** Gatsby only grabs data from Prismic on build, so the server must be restarted to grab the new data. You can clear use the following script to clear the `.cache` and force a rebuild.
```shell
npm run start:clean
```

### Deploying to Netlify

1.  **Set up a Netlify account.**

    You can following the following [https://app.netlify.com/signup](https://app.netlify.com/signup) to create a new account!

2.  **Create a new site from Git.**

    On the Netlify dashboard, press the button marked `New site from Git`.

    Under the Continuous Development section, select GitHub and give authorization to Netlify to look at your repos.

    Choose the `bikebus-site` repository to connect to Netlify.

    Select the branch to deploy (our default branch is `develop`, but for production it should be `master`).

    The build command should be `gatsby develop`.

    The publish directory should be `public`.

    Finally, click `Deploy site`!

3.  **Set your environment variables.**

    Since the `.gitignore` file for this repo ignores any `.env` file, Netlify has no way to know what your environment variables are.

    To amend this, under the site settings for Netlify you should be able to add the environment variables from your repo!

4.  **Deploy!**

    Once you finish setting up, Netlify should automatically start deploying the website!

    If it hasn't already or failed because of the environment variables, there is a button to trigger a manual deploy!

    _Note: Netlify has built-in GitHub hooks, so that every time you push to your `master` branch (or whichever one you set up) it will build and deploy the new files._

    #### Alternatively you could use this button

    [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

## About
<p  align="center">
  <img src="https://web.northeastern.edu/scout/wp-content/themes/scout/images/logo.png" alt="Scout Logo" />
</p>

This project was designed and developed by Scout. Each semester the studio produces design and development assets for Northeastern affiliated ventures. You can check us out on the [Scout website](https://web.northeastern.edu/scout/)

<!-- AUTO-GENERATED-CONTENT:END -->
