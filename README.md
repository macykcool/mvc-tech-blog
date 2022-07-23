# MVC Tech Blog

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Purpose
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Table of Contents
- [Purpose](#purpose) 
- [Description](#description) 
- [Installation Instructions](#installation-instructions)
- [Demo Preview](#demo-preview)
- [Github Repository](#github-repository)
- [Heroku Deployed](#heroku-deployed)

## Description
A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Installation Instructions  
Go to the github repo provided below and download the code. The following dependencies should be installed when after running 'npm install': "bcrypt", "connect-session-sequelize", "dotenv", "express", "express-handlebars", "express-session","mysql2", "sequelize".
Make sure there is an "seed" script in the packagedotjson.
Next you will add a local dotenv file with your mysql credentials.
After running mysql in the terminal you will run 'source db/schema.sql' then 'quit'.
Next in the terminal run 'npm run seed' and then 'npm start'. 
The console will let you know the localhost:3001 is ready to be used in a web browser.
 
## Demo Preview
![Note Taker demo](./gif/mvctechblog.gif)

## Github Repository
https://github.com/macykcool/mvc-tech-blog

## Heroku Deployed
https://mvc-tech-blog-mkm.herokuapp.com/

## Made with ❤️️ by Macy Mannix
Mentored by UC Davis Full Stack Web Developer Bootcamp