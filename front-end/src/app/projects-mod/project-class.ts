
export class Project{
  _id: string;
  title: string;
  description: string;
  location: string;
  meetup: string;
  status: string;
  github: string;
  category: string;
  picture: string;
  // Member info
  leader: string;
  leaderId: string;
  members: string[];
  pendingMembers: string[];

  //Constructor
  constructor(
    _id: string,
    title: string,
    description: string,
    location: string,
    meetup: string,
    status: string,
    github: string,
    category: string,
    picture: string,
    // Member info
    leader: string,
    leaderId: string,
    members: string[],
    pendingMembers: string[]
  ){
    this._id = _id;
    this.title = title;
    this.description= description;
    this.location= location;
    this.meetup= meetup;
    this.status= status;
    this.github= github;
    this.category= category;
    this.picture= picture;
    // Member info
    this.leader= leader;
    this.leaderId=leaderId;
    this.members= members;
    this.pendingMembers= pendingMembers;
  }
};
