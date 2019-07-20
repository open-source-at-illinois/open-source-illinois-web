import { User } from "../user-mod/user-class";
export class Workshop{
  title: string;
  description: string;
  date: Date;
  location: string;
  status: string;
  category: string;
  presenter: User;

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
