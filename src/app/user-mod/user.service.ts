import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from './user-class';
import { Project } from '../projects-mod/project-class';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // 'Authorization': 'my-auth-token'
  })
};

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

  getUserMember(): Observable<User>{
    return this.http.get<User>('http://localhost:3000/api/member/Brian')
      .pipe(
        tap(user => console.log(user))
      );
  }

  getPendingProjects(position: string): Observable<Project[]>{
    return this.http.get<Project[]>('http://localhost:3000/api/project/pending/'+position)
    .pipe(
      tap(project => console.log(project))
    );
  }

  approveProject(project: Project): Observable<Project> {
    return this.http.put<Project>('http://localhost:3000/api/project/updateStatus',project, httpOptions)
    .pipe(
      tap(project => console.log(project))
    );
  }
}
