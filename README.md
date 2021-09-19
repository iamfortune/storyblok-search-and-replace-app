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
  - [Viewing the database](#viewing-the-database)
- [Testing the project](#testing-the-project)
- [Deployment](#deployment)
- [Author](#author)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Description

The project is built with [Node.js](https://nodejs.org/en/) which serves the backend environments. And Storyblok space is used for storing the stories. In this project, I used Storyblok's API to create a webapp that searches and replaces a string in all stories and publishes the changes in a Storyblok space. 

You can search and replace strings in a story by adding the strings in an input field and submitting with the submit button, the changes will be published on Storyblok space and on the frontend for the user. 

## Getting Started

### Requirements

- [Create a Storyblok space(here)](https://app.storyblok.com/#!/me/spaces) ensure that the space has content loaded on it.
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
NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=

MONGODB_URI=

JWT_SECRET_KEY=
```

Copy all of these environment variables to `.env.local` and replace the values with your own.

- You can get the `NEXT_PUBLIC_STREAM_API_KEY` and `STREAM_SECRET_KEY` from [the Stream Dashboard](https://dashboard.getstream.io/dashboard)
- You can get the `MONGODB_URI` [here](#configuring-your-database)
- Your `JWT_SECRET_KEY` can be any string. For example, "ecommerce-stream". It's used for creating tokens for authentication.

### Running the server

```bash
npm run dev
```

The `pages/api/` directory contains the API endpoints which can be accessed on `localhost:3000/api/*`.

And the application can be run on `localhost:3000`.

### Viewing the database

When you open the MongoDB Compass to view the database, the database will only have the products collection, but it would be empty. To populate the database, you can signup as a seller. And in the Compass app, you'll see the "sellers" collection with the new seller.

So, you can go ahead to add more models and collections.

## Testing the project

Now that you have the server running, here are things you can try to see the features of the app:

- create a seller account
- create a buyer account (on a different browser, or Incognito)
- add a product on the seller account
- view the product on the buyer account
- click the start conversation button
- send a message
- on the seller account, go to the dashboard and view the product
- then click the view conversation button
- and chat with the buyer
- you can also choose to create another buyer account, and create a conversation on the same project and see how both conversations are displayed on the seller's dashboard

### Deployment

You can deploy the Next.js application to [Vercel](https://nextjs.org/docs/deployment) seamlessly. For your MongoDB database, you can create your database on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/). From Atlas, you can get your URI and use that in your environment variable.

You can also use the [MongoDB Compass](https://www.mongodb.com/try/download/compass) to view the database on Atlas. You just need to connect using the URI from Atlas.

## Author

[Dillion Megida](https://github.com/dillionmegida)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.

## Acknowledgements

Inspiration for this project came from [Nick Parsons](https://twitter.com/nickparsons) who wanted to show different ways to integrate Stream.
