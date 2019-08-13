# OpenSourceWeb Docs

Implemented using a MEAN (MongoDB, Express.js, Angular, Node.js) stack, the open-source@illinois website is built to be maintainable, readable and expandable. The following is comprehensive documentation designed to explain the high-level logic of the site and how to add the project. However, if you have questions, first try to solve it yourself. After that, feel free to contact lead developer Thomas Driscoll at thomasdriscoll98@gmail.com . He'll reach out to you within 5 business days.

## Installation
1) Follow the instructions to download Angular from its website
2) Clone from the master branch on Github
  - If you do not have git installed, download it!
3) Run "npm install" in open-source-illinois-web root folder
4) Reach out to an active developer to get the secret key to the database
5) Run "npm run serve" to launch

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
The Member page purpose is to display all members and officers of the club, their Github accounts and links to their various projects.

On init, members.service makes a request to the server for all members signed up with the club. This is returned via members.service to member.component.ts, where a ngFor loop fills out everything. Angular Materials are utilized to fill out each members card.

--- UPCOMING ---
- Each member will have associated projects
- Each officer will have associate projects AND workshops they lead
- Enable pictures stored in Google Cloud api for each member (nonessential)

### Projects
The Project page's purpose is to display all projects, both completed and in progress.

Same basic process as members for getting projects. 

--- UPCOMING ---
- Users should be able to sign up for project 
- Project display should be updated with Angular materials

### Workshops
The Workshop page's purpose is to display all workshops, both completed and in progress.

Same basic process as members for getting projects. 

--- UPCOMING ---
- Users should be able to sign up for workshop 
- Workshop display should be updated with Angular materials

### User Page
The User page's purpose is to display information unique to the user. Currently, it is being designed and implemented with the following objectives in mind:
- If the user is an officer, they should be able to approve or reject suggested project or workshop ideas
- User can remove themselves from projects

### Login
Yeah, this is just technically challenging and Thomas is handling it after his internship is over. There's database integration and security for the front-end and the back-end. It's a whole thing. Don't worry about it.


## Node.js Server
### Index.js
### Routes
### Controllers
### Models

## MongoDB Database