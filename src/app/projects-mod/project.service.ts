import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'
import { Project } from './project-class';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('http://localhost:3000/api/project/all')
      .pipe(
        tap(projects => console.log(projects))
      );
  }

  getProjectByUser(userId: string): Observable<Project[]>{
    return this.http.get<Project[]>('http://localhost:3000/api/project/byUser/'+userId)
      .pipe(
        tap(projects => console.log(projects))
      );
  }

  addProjectMember(userId:string, projectId: string): Observable<Project> {
    return this.http.put<Project>('http://localhost:3000/api/project/addProjectMember', [userId, projectId], {responseType: 'text' as 'json'})
    .pipe(
      tap(workshop => console.log(workshop))
    );
  }

  approveProjectMember(userId: string): Observable<Project>{
    return this.http.put<Project>('http://localhost:3000/api/project/approveProjectMember', userId, {responseType: 'text' as 'json'})
    .pipe(
      tap(workshop => console.log(workshop))
    );
  }

  rejectProjectMember(userId: string): Observable<Project>{
    return this.http.delete<Project>('http://localhost:3000/api/project/rejectProjectMember/'+userId)
    .pipe(
      tap(workshop => console.log(workshop))
    );
  }
}
