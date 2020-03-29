import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Workshop } from './workshop-class';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  constructor(private http: HttpClient) { }

  //Get all active workshops
  getAllWorkshops(): Observable<Workshop[]> {
    return this.http.get<Workshop[]>(environment.apiUrl+'api/workshop/all');
  }

  //Get all workshops with status 'suggested' whose category is associated with an officer's role
  getSuggestedWorkshops(position: string): Observable<Workshop[]>{
    return this.http.get<Workshop[]>(environment.apiUrl+'api/workshop/suggested/'+position);
  }

  // Get all workshops led by a presenter with userId
  getWorkshopByUser(userId:string): Observable<Workshop[]> {
    return this.http.get<Workshop[]>(environment.apiUrl+'api/workshop/byUser/'+userId);
  }
  
  //Create a workshop
  createWorkshop(workshop: Workshop): Observable<Workshop> {
    return this.http.post<Workshop>(environment.apiUrl+'api/workshop/add', workshop, {responseType: 'text' as 'json'});
  }

  //Change status of workshop -- accepted values are 'suggested', 'active', 'rejected'
  statusWorkshop(workshop: Workshop): Observable<Workshop> {
    return this.http.put<Workshop>(environment.apiUrl+'api/workshop/updateStatus', workshop, {responseType: 'text' as 'json'});
  }

  // Add attendee to attending array
  addAttendee(userId:string, workshopId: string): Observable<Workshop> {
    return this.http.put<Workshop>(environment.apiUrl+'api/workshop/addAttendee', [userId, workshopId], {responseType: 'text' as 'json'});
  }


}



