import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'
import { Workshop } from './workshop-class';
import { catchError, map, tap } from 'rxjs/operators';

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
}
