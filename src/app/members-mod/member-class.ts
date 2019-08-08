export class Member{
  firstname: string;
  lastname: string;
  picture: string;
  email: string;
  github: string;
  constructor(
    email: string,
    firstname: string,
    github: string,
    lastname: string,
    picture: string
  ){
    this.email = email;
    this.firstname = firstname;
    this.github = github;
    this.lastname = lastname;
    this.picture = picture;
  }
}
