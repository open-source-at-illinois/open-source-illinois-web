import { User } from "../user-mod/user-class";
import { Member } from '../members-mod/member-class';

export class Workshop{
  _id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  status: string;
  category: string;
  presenter: User;
  attending: string[];

  constructor(title: string,
    description: string,
    date: Date,
    location: string,
    status: string,
    category: string,
    presenter: User) {
      this.title = title;
      this.description = description;
      this.date = date;
      this.location = location;
      this.status = status;
      this.category = category;
      this.presenter = presenter;
  }
}
