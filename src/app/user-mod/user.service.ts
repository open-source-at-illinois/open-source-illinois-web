import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'
import { User } from './user-class';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>('http://localhost:3000/api/officer/Thomas')
      .pipe(
        tap(user => console.log(user))
      );
  }
}
