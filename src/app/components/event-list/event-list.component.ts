import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  standalone: false,
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent implements OnInit{

  events!:Event[]
  constructor(private eventService:EventService,private router:Router){

  }
  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((res)=>{
      this.events=res
    })

  }


  supprimer(id:any){
    if ( confirm("Merci de confirmer la suppression !")) {
      this.eventService.deleteEvent(id).subscribe((res)=>{
            alert("Bien supprime")
            this.ngOnInit()
      })

    }
  }


  toUpdate(id:any){
    this.router.navigate(["events/update/",id])

  }

}
