import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'
import { Member } from './member-class';
import { User } from '../user-mod/user-class';
import { catchError, map, tap } from 'rxjs/operators';
// interface Member{
//   name: string
// }

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
    console.log('http://localhost:3000/api/member/'+member.firstname+'/'+member.lastname);
    return this.http.get<User>('http://localhost:3000/api/member/'+member.firstname+'/'+member.lastname)
    .pipe(
      tap(member => console.log(member))
    );
  }

}
