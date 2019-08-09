import { Member } from '../members-mod/member-class';

export class Project{
  id: string;
  title: string;
  description: string;
  status: string;
  github: string;
  category: string;
  leader: string;
  members: Member[];
};
