import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Member } from './member-class';
import { User } from '../user-mod/user-class';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }

  //Get all members
  getAllMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(environment.apiUrl+'api/member/all');
  }

  //Get a specific member by their name -- make this unsupported on next release
  getMember(member: User): Observable<User>{
    return this.http.get<User>(environment.apiUrl+'api/member/name/'+member.firstname+'/'+member.lastname);
  }

  //Get a specific member by their github
  getMemberByGithub(github: string): Observable<User>{
    return this.http.get<User>(environment.apiUrl+'api/member/github/'+github);
  }

  // Get array of Members when passed an array of memberIds
  getPendingMembers(pending: any): Observable<User[]>{
    const options = {params: new HttpParams().set('pending', JSON.stringify(pending))}
    return this.http.get<User[]>(environment.apiUrl+'api/member/pending', options);
  }
  
  // Given a member, posts it to database
  addMember(member: Member): Observable<Member>{
    return this.http.post<Member>(environment.apiUrl+'api/member/add', member, httpOptions)
  }

}
