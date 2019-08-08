import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Member } from './member-class';
import { User } from '../user-mod/user-class';
import { catchError, map, tap } from 'rxjs/operators';
// interface Member{
//   name: string
// }

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }

  getAllMembers(): Observable<Member[]> {
    return this.http.get<Member[]>('http://localhost:3000/api/member/all')
                    .pipe(
                      tap(members => console.log(members)),
                      // map(members => members)
                      // map()
                      // catchError(this.handleError<Member[]>('getAllMembers', []))
      );
  }

  getMember(member: User): Observable<User>{
    return this.http.get<User>('http://localhost:3000/api/member/name/'+member.firstname+'/'+member.lastname)
    .pipe(
      tap(member => console.log(member))
    );
  }

  getMemberByGithub(github: string): Observable<User>{
    return this.http.get<User>('http://localhost:3000/api/member/github/'+github)
    .pipe(
      tap(member => console.log(member))
    );
  }

  addMember(member: Member): Observable<Member>{
    return this.http.post<Member>('http://localhost:3000/api/member/add', member, httpOptions)
  }

}
