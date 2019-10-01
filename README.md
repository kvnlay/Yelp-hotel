# Yelp-hotel

A platform where users post hotels and write reviews about them and other users can comment and like.

![yelphotel](https://user-images.githubusercontent.com/21004010/65952632-261a3a80-e43a-11e9-9ca1-a16691d3495e.png)

## [Live version](https://polar-citadel-56618.herokuapp.com/)

## Technologies
- Node.JS
- Express.JS
- Bootstrap
- Passport
- Heroku

## Features

* Authentication:
  
  * User login with username and password

* Authorization:

  * One cannot manage posts and view user profile without being authenticated

  * One cannot edit or delete posts and comments created by other users

* Manage hotel posts with basic functionalities:

  * Create, edit and delete posts and comments

  * Upload hotel photos

* Flash messages responding to users' interaction with the app

* Responsive web design

---
## Requirements

> This app contains API secrets and passwords that have been hidden deliberately, so the app cannot be run with its features on your local machine. However, feel free to clone this repository if necessary.

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


## Install

    $ git clone https://github.com/kvnlay/yelp-hotel
    $ cd yelp-hotel
    $ npm install

## Configure app

-MongoDB: The project uses MongoDB as a database. If you are on Mac and using Homebrew package manager the installation is as simple as brew install mongodb.
- Set your mongodb url path as an evironment variable called databaseURL;

## Running the project

    $ npm start

## Contributors
- [Kingsley Omotayo](https://github.com/kvnlay)
