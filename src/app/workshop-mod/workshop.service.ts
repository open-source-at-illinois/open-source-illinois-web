import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Workshop } from './workshop-class';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  constructor(private http: HttpClient) { }

  getAllWorkshops(): Observable<Workshop[]> {
    return this.http.get<Workshop[]>('http://localhost:3000/api/workshop/all');
      // .pipe(
      //   tap(workshops => console.log(workshops))
      // );
  }

  getSuggestedWorkshops(position: string): Observable<Workshop[]>{
    return this.http.get<Workshop[]>('http://localhost:3000/api/workshop/suggested/'+position);
    // .pipe(
    //   tap(project => console.log(project))
    // );
  }

  getWorkshopByUser(userId:string): Observable<Workshop[]> {
    return this.http.get<Workshop[]>('http://localhost:3000/api/workshop/byUser/'+userId);
    // .pipe(
    //   tap(workshop => console.log(workshop))
    // );
  }
  
  createWorkshop(workshop: Workshop): Observable<Workshop> {
    return this.http.post<Workshop>('http://localhost:3000/api/workshop/add', workshop, {responseType: 'text' as 'json'});
    // .pipe(
    //   tap(workshop => console.log(workshop))
    // );
  }

  statusWorkshop(workshop: Workshop): Observable<Workshop> {
    return this.http.put<Workshop>('http://localhost:3000/api/workshop/updateStatus', workshop, {responseType: 'text' as 'json'});
    // .pipe(
    //   tap(workshop => console.log(workshop))
    // );
  }

  addAttendee(userId:string, workshopId: string): Observable<Workshop> {
    return this.http.put<Workshop>('http://localhost:3000/api/workshop/addAttendee', [userId, workshopId], {responseType: 'text' as 'json'});
    // .pipe(
    //   tap(workshop => console.log(workshop))
    // );
  }


}



