# TEAM-PROFILE-GENERATOR

## Click [here](https://drive.google.com/file/d/1RT7uRCGHBfOVZU2XJFe_QtTTFuNgeiyh/view?usp=sharing) to watch my video recording

## Description

Our task was to build a readme generator in order to quickly create a readme generator for a new project.
The readme generator will display the title of the project blended together with Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions. Firstly, the readme generator will display the tile of my project alongside with the description, installation instructions, usage, contributors, any test needed, questions. Secondly, when it comes to the licenses will render a list of licenses alongside with the badge of the license which will be added on top of the readme. Also, after entering the github username the readme generated should direct the user to the github link and after entering the email address the user will be directed to a section called questions for further additional information or questions.

---

## Requirements

For development, you will only need Node.js and a node global package installed in your environment

## Getting started

    $ git clone https://github.com/otivisan22/TEAM-PROFILE-GENERATOR
    $ cd TEAM-PROFILE-GENERATOR
    $ npm i

## What did we do?

- Install npm i
- Install npm i jest:watch
- Install npm i jest
- Install npm i inquirer
- Using inquirer we have generated/prompt the questions
- Created a function to write ReadMe file
- Created a function that returns a license badge based on which license is passed in
- If there is no license return an empty string
- Created a function to generate markdown for readme

## Running the project

    $ npm start

## Testing

    $ npm run test:watch
    $ npm run tests
