import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Workshop } from './workshop-class';
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
export class WorkshopService {

  constructor(private http: HttpClient) { }

  getAllWorkshops(): Observable<Workshop[]> {
    return this.http.get<Workshop[]>('http://localhost:3000/api/workshop/all')
      .pipe(
        tap(workshops => console.log(workshops))
      );
  }

  suggestWorkshop(workshop: Workshop): Observable<Workshop> {
    return this.http.post<Workshop>('http://localhost:3000/api/workshop/add', workshop, httpOptions)
    .pipe(
      tap(workshop => console.log(workshop))
    );
  }
}
