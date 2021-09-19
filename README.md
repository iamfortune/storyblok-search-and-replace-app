# Storyblok Stories App

This is a sample project showing how to modify content that is stored within [Storyblok](https://www.storyblok.com/docs/api/content-delivery)

## Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
- [Running the project](#running-the-project)
  - [Clone the project](#clone-the-project)
  - [Installation](#installation)
  - [Adding the environment variables](#adding-the-environment-variables)
  - [Running the server](#running-the-server)
  - [Viewing the stories](#viewing-the-stories)
- [Deployment](#deployment)
- [Author](#author)
- [License](#license)

## Description

The project is built with [Node.js](https://nodejs.org/en/) which serves the backend environments. And Storyblok space is used for storing the stories. In this project, I used Storyblok's API to create a webapp that searches and replaces a string in all stories and publishes the changes in a Storyblok space. 

You can search and replace strings in a story by adding the strings in an input field and submitting with the submit button, the changes will be published on Storyblok space and on the frontend for the user. 

## Getting Started

### Requirements

- [Create a Storyblok space (here)](https://app.storyblok.com/#!/me/spaces) ensure that the space has content loaded on it.
- [Node.js](https://nodejs.org/en/) installed on your machine
- [Storyblok Account](https://app.storyblok.com/#!/signup)

## Running the project

### Clone the project

```bash
git clone https://github.com/iamfortune/storyblok-search-and-replace-app.git
```

### Installation

The dependencies are in the `package.json` file. After cloning, run the following command to install the dependencies:

```bash
cd storyblok-search-and-replace-app
npm install
```

### Adding the environment variables

In the `.env.local.example`, you can find the environment variables needed for the project. They are:

```env
AUTH_TOKEN=
PREVIEW_TOKEN=
```

Copy all of these environment variables to `.env` and replace the values with your own.

- You can get the `AUTH_TOKEN` and `PREVIEW_TOKEN` from [the Storyblok User Account Dashboard](https://app.storyblok.com/#!/me/account)

### Running the server

```bash
npm start
```

The `src/client` directory contains the user interface which can be accessed on `localhost:5001/`
The `src/server` directory contains the API endpoints which can also be accessed on `localhost:5001/api`.

And the application can be run on `localhost:5001`.

### Viewing the stories

When you open your Storyblok space to view the stories, the space will have your `Home` and `About` pages. You can click on either page and populate the page with data. You can also go ahead and populate the other pages with more data. 

### Deployment

You can deploy the application to [Heroku](https://devcenter.heroku.com/categories/deployment). For your Storyblok stories, you can create a space on [Storyblok](https://www.storyblok.com/cl/new-dashboard). From Storyblok, you can get your auth tokens and use that in your environment variable.

## Author

[Fortune Ikechi](https://github.com/iamfortune)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.

