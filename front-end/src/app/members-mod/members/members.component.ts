import { Component, OnInit } from '@angular/core';
import { Member } from '../member-class';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members: Member[];

  constructor(private membersService: MembersService) {}

  ngOnInit() {
    this.getAllMembers();
  }

  getAllMembers(): void{
    this.membersService.getAllMembers()
    .subscribe(
      members => this.members = members);
    }

}
