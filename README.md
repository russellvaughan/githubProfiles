# GitHub Profile Viewer

## Overview
The purpose of the GitHub Profile Viewer is to provide a platform for the user to be able to search through GitHub profiles which belong to the Makers Academy GitHub organization. The user is afforded the ability to search by one of a number of possible criteria.

The project was primarily built upon Angular JS, with unit and end-to-end testing provided by a combination of Jasmine, Karma and Protractor. The entire project has been built following Agile methodologies and a Test Driven Development led approach, with general best practices adhered to throughout. Wherever possible, logic has been extracted from controllers to be handled specifically by Angular JS factories, in order to retain separation of concerns.

This project was created for the [Maker's Academy](http://www.makersacademy.com/) week 8 group project. The authors are listed at the foot of this README.

## Instructions

In order to use the Github Profile Viewer on a local installation please follow the steps outlined below. Note that a local installation will require particular dependencies (described) in order to run. Alternatively the online version is hosted on Heroku and can be found [here](https://github-view-profiles.herokuapp.com/#/index.html). The following instructions are based upon Mac OSX, and should operate similarly to Linux. Care must be taken however to adapt the instructions below if using a Windows operating system.

* Ensure that your machine has [Git](https://git-scm.com/) installed.

* Ensure that your machine has [Node](https://nodejs.org/en/) installed.

* From the terminal clone the repository to your local machine using `git clone https://github.com/katie210/githubProfiles.git`.

* `cd` in to the newly cloned repository.

* Use 'npm start' to start the NPM server running. The first time `npm start` is called after cloning the repository the server may take some time to run, because all dependencies will be automatically downloaded and installed by both NPM and Bower. Subsequently the server should run in much less time.

* The server will be signified as running once the terminal output displays the following (or very similar):
```
Starting up http-server, serving ./ on port: 8000
Hit CTRL-C to stop the server
```

* From within your web browser navigate to `localhost:8000/app`. You will be presented with the application page.

* You can now search for members who belong to the Makers Academy GitHub organization. Enter a search term in the search bar toward the top of the page. The search term can be based upon the required user's GitHub username, real name or location.

* The search results will update the displayed GitHub profiles upon every keystroke, so it is possible that your intended search result may be reached before you have completed entering your search term.

* In order to cancel or amend the current search, simply edit the text displayed in the search bar. Deleting all text within the search bar will return the page to it's default state.

* In order to stop the server from running, within the terminal enter `CTRL-C` (Hold down the 'ctrl' key and whilst it is held down enter the 'c' key).

# Running The Tests
Throughout the development of the GitHub Profile Viewer both unit tests and end-to-end tests have been used extensively. When running the project on a local installation, the ability to run the tests locally is afforded. To do so, follow the steps outlined below:

* In order to run the unit tests, simply navigate to the project directory, and from the terminal use `npm test`. Note that in order to run the unit tests the server does not need to be running. Note that during the unit tests Karma will attempt to run the Google Chrome and/or Mozilla Firefox web browser(s), so if these are not currently installed on your machine then further configuration may be required in order to adapt the test environment to your preferred web browser(s). Instructions to do so are outside of the scope of this README. Once the tests have been completed the results will be displayed within the terminal output.

* In order to run the end-to-end tests, begin by running the server, as described above in the 'Instructions' section. With the server running, open another terminal window/tab and navigate to the same project directory. From the terminal use `npm run protractor` to begin running the end-to-end tests. Similarly to the unit tests, protractor will attempt to run the Google Chrome and/or Mozilla Firefox web browser(s), so if these are not currently installed on your machine then further configuration may be required in order to adapt the test environment to your preferred web browser(s). Instructions to do so are outside of the scope of this README. Once the tests have been completed the results will be displayed within the terminal output.

## Languages and Technologies Used
* Angular JS
* JavaScript
* HTML
* CSS
* Jasmine
* Karma
* Protractor
* Bower
* Node
* NPM
* Bower
* Waffle.io

## Key Learning Objectives and Takeaways
* Experience working as part of an Agile team to complete a project within a short timeframe.
* Experience adhering to a professional workflow, based upon strict implementation of GitHub issues and Waffle.io.
* Practice using a Test Driven Development led approach.
* Opportunity to gain experience with extracting logic to Angular JS factories in order to retain separation of concerns.
* Adherence to programming best practices.

## Authors
* Kait Beaudette
* Marco Bagnasco
* Barry Grubb
* Russell Vaughan
