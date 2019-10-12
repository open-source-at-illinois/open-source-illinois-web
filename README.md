# OpenSourceWeb #

This is the repository for the Open Source @ Illinois dynamic website.

This project depends on Node.js and Angular (Angular CLI version 7.3.8 or later should be sufficient).  See the [*Setup*](#Setup) section for details on setting them up.

## Setup ##

Here is a general procedure for setting up the project:

1. Install the latest stable Node.js version (10.16.3 LTS as of September 21, 2019).  The latest version can be installed from the [Node.js website.](https://nodejs.org/en/)
2. Install the latest Angular version (8.3.5 as of September 21, 2019) globally by running `npm install -g @angular/cli`.
3. Install the project's dependencies by running `npm install`.
4. Test the setup by running `ng serve` and navigating to `http://localhost:4200` in a browser.  The website's homepage should appear.

For more information on setting up Angular, see the [*Setup*](https://angular.io/guide/setup-local) section of the Angular documentation.

## Development server ##

Run `npm run serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding ##

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build ##

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests ##

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests ##

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help ##

To get more help on the Angular CLI, use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
