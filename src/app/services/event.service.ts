import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../config/config';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  backendURl:string=baseUrl+"/events"
  constructor(private http:HttpClient) { }

  getAllEvents():Observable<Event[]>{
     return this.http.get<Event[]>(this.backendURl)
  }


  getEventById(id:any):Observable<Event>{
    return this.http.get<Event>(`${this.backendURl}/${id}`)
  }


  addEvent(e:Event):Observable<Event>{
    return this.http.post<Event>(this.backendURl,e)
  }

  deleteEvent(id:any):Observable<any>{
    return this.http.delete(`${this.backendURl}/${id}`)
  }

  updateEvent(id:any,e:Event):Observable<Event>{
    return this.http.put<Event>(`${this.backendURl}/${id}`,e)
  }



}

