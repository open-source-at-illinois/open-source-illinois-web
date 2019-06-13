import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'
import { Member } from './member-class';
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

}
