
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
};
