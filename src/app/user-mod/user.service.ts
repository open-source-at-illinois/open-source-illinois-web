import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from './user-class';
import { Project } from '../projects-mod/project-class';
import { Workshop } from '../workshop-mod/workshop-class';
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
  getSuggestedProjects(position: string): Observable<Project[]>{
    return this.http.get<Project[]>('http://localhost:3000/api/project/suggested/'+position);
    // .pipe(
    //   tap(project => console.log(project))
    // );
  } 

  statusProject(project: Project): Observable<Project> {
    return this.http.put<Project>('http://localhost:3000/api/project/updateStatus', project, {responseType: 'text' as 'json'})
    .pipe(
      tap(project => console.log(project))
    );
  }
}
