# OpenSourceWeb Docs

Implemented using a MEAN (MongoDB, Express.js, Angular, Node.js) stack, the open-source@illinois website is built to be maintainable, readabl e and expandable. The following is comprehensive documentation designed to explain the high-level logic of the site and how to add the project. However, if you have questions, first try to solve it yourself. After that, feel free to contact lead developer Thomas Driscoll at thomasdriscoll98@gmail.com . He'll reach out to you within 5 business days.

## Installation
1) Follow the instructions to download Angular from its website
2) Clone from the master branch on Github
  - If you do not have git installed, download it!
3) Run "npm install" in open-source-illinois-web root folder
4) Reach out to an active developer to get the secret key to the database
  - If you are from a different area, please reach out to Thomas
5) Navigate to server/config/environment.js and make sure the module.exports is set to dev_environment
6) Navigate back to the root folder and run 'npm run serve".
  - If you are testing the docker environment, run "docker-compose up --build"
  - If you are testing the production docker environemtn, run "docker-compose -f docker-compose-prod.yml up --build"



# Troubleshooting
A common problem new developers have faced on entering the project are plug-ins and other security features blocking the cross-origin requests between the front-end and back-end. Thomas has addressed this as best he can with a proxy server but, for development, please disable these. As you encounter other initial problems, please make an issue on the Github page.

## Angular
The front-end is implemented using Angular. The choice was multi-faceted. Angular uses Typescript (a typed flavor of Javascript), which would allow a singular language across the stack; it is open-source, keeping in the methodology of the club; and, most importantly, Thomas used Angular at his summer internship, allowing him to develop and teach others.

### Imported Modules
Thomas set up a helper module to import Angular materials so that the website can be developed with those materials in mind (since he believes they enable better and faster UI development)

### Navbar
The navigation bar is handled in an Angular Component called navbar, located in src/app/navbar . This was separated from app.component.ts as Thomas expected later development to make the navbar sufficiently complex to justify modularization.
It displays the title of the website, a Home button that links back to the Topics component and the User page.

### Topics
The topics component is the main page on launch of the website. It loads in the static array from main_topics.ts that fills out divs linking the user to the Members, Workshops, Projects, Calendar and Scrum Board modules. The Calendar module is simply a link to a Google calendar where general info (workshops, meeting times, etc) will be placed.

### Member
The Member page purpose is to display all members and officers of the club, their Github accounts and links their Github picture.

On init, members.service makes a request to the server for all members signed up with the club. This is returned via members.service to member.component.ts, where a ngFor loop fills out everything. Angular Materials are utilized to fill out each members card.


### Projects
The Project page's purpose is to display all projects, both completed and in progress. Under each project is a button to sign up to be approved for a project. 

Same basic process as members for getting projects. 


### Workshops
The Workshop page's purpose is to display all workshops, both completed and in progress. Under each workshop, any user can immediately sign up to come to a workshop

Same basic process as members for getting projects. 

### User Page
The User page's purpose is to display information unique to the user. Based on the user, who can a member or officer, various displays are shown:
1) Member (nothing special)
- Name, Github, Suggest a Workshop, Suggest a Project
2) Member (project leader)
- Same as member but they can approve new members to their project
3) Officer 
- Can approve any pending suggested workshops (correlating to the category they are in charge of) or projects

### Login
Utilizes Auth0. Users register with their Github and the front-end receives information about the user and an associated bearer token. Development address of localhost:3000 is what the api is currently implemented around; localhost:4200 is whitelisted for front-end development




## Node.js Server
The back-end was implemented as a RESTful Express.js server. This was due to the enormous popularity of Node.js (Express.js is an implementation of Node.js) as a back-end framework and to maintain a Javascript full-stack for new and upcoming developers. Further, it is an open-source technology, again keeping with the methodology of the club.

### Index.js
The entry point of the app, it gets the app running on a specified port. After starting, the server will allow cross-origin requests with localhost:3000 (in development) and authenticate the request from the front-end. This currently implemented on a one-size fits all profiles but Thomas plans to admit admin tokens as more and more advanced features are added. 

### Routes
index.router.js holds the api requests to each controller. This was a stylistic choice and not strictly necessary. Each controller has its own router page that handles the types of requests that might be made to it. As features expand, this also allows scalability and maintainability.

### Controllers
Each controller handles the collection of each document type in MongoDB: Projects, Workshops, Members (Officers being a subclass of Members). As of right now, few cross-collections requests have been made. Thomas will update documentation if this occurs.

### Models
The way the back-end interacts with the data in the database. Models "model" the attributes of a document and translate it into a Javascript Object. It also sets the relationships between collections (i.e. specifying the ObjectId of another document in another collection).

## MongoDB Database
See diagram