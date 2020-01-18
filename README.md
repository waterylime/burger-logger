# DumBurger

## Description

This is a full-stack app that is hosted on Heroku. It allows users to input the burger they desire, storing it in a database, playing a sound, and displaying it in the left, created burgers, side. Each burger that has been created has a devour button. When pressed, a sound is played, the burger is moved to the eaten side of the screen, and the database is updated.

## Functionality

This app follows the full-stack app architecture, including an ORM, a controller, a server, models, and public assets. While simple in operation, there is quite a bit of functionality under the hood. The app allows for GET, POST, and UPDATE routes, and has server-side responses to the various requests. The app pulls all from the database upon page reload, thus updating the display - when a command is made by the user, a reload is triggered (after a sound is played. The reload is timed to execute once the sound has completed playing).

### Libraries, Technologies, and Modules used

This app uses the following external technologies, modules, and libraries: JQuery, DOTENV, express, express-handlebars, mysql, JAWSdb.

## Deployed Link

https://morning-beach-14851.herokuapp.com/
