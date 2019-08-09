export class User{
  email: string;
  firstname: string;
  github: string;
  lastname: string;
  picture: string;
  position: string;

  constructor(
    email: string,
    firstname: string,
    github: string,
    lastname: string,
    picture: string,
    position: string,
  ){
    this.email = email;
    this.firstname = firstname;
    this.github = github;
    this.lastname = lastname;
    this.picture = picture;
    this.position = position;
  }
};
