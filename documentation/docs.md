# OpenSourceWeb Docs

Implemented using a MEAN (MongoDB, Express.js, Angular, Node.js) stack, the open-source@illinois website is built to be maintainable, readable and expandable. The following is comprehensive documentation designed to explain the high-level logic of the site and how to add the project. However, if you have questions, first try to solve it yourself. After that, feel free to contact lead developer Thomas Driscoll at thomasdriscoll98@gmail.com . He'll reach out to you within 5 business days.

## Installation
1) Install Node.js
2) Download from the master branch on Github
  - If you do not have git installed, download it!
3) npm commands in open-source-illinois-web root folder
  - 1) npm install
  - 2) npm install rxjs rxjs-compat express mongoose
  *At this point, front-end development can be run. Further steps are for back-end developers and those who need access to the database* 
4)

## Angular
The front-end is implemented using Angular. The choice was multi-faceted. Angular uses Typescript, which would allow a singular language across the stack; it is open-source, keeping in the methodology of the club; and, most importantly, Thomas used Angular at his summer internship, allowing him to develop and teach others.

### Navbar
The navigation bar is handled in an Angular Component called navbar, located in src/app/navbar . This was separated from app.component.ts as Thomas expected later development to make the navbar sufficiently complex to justify modularization.
It displays the title of the website, a Home button that links back to the Topics component and the Profile page.

### Topics
The topics component is the main page on launch of the website. It loads in the static array from main_topics.ts that fills out divs linking the user to the Members, Workshops, Projects and Calendar modules.

### Member
The Member page purpose is to display all members and officers of the club, their Github accounts and links to their various projects.

On init, members.service makes a request to the server for all members signed up with the club. This is returned via members.service to member.component.ts, where a ngFor loop fills out everything.

### Projects



## Node.js Server
