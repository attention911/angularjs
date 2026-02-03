import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-update',
  standalone: false,
  templateUrl: './event-update.component.html',
  styleUrl: './event-update.component.css'
})
export class EventUpdateComponent implements OnInit {

  event: any = {
    titre: '',
    type: '',
    dateEvent: '',
    lieu: '',
    cover: ''
  };

  id!: string;

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.eventService.getEventById(this.id).subscribe({
      next: (res) => {
        this.event = res;
        if (this.event.dateEvent) {
          this.event.dateEvent = this.formatDateForInput(this.event.dateEvent);
        }
      },
      error: (err) => console.log(err)
    });
  }

  update(form: any) {
    if (!form.valid) {
      alert('Merci de remplir tous les champs correctement.');
      return;
    }

    this.event.dateEvent = new Date(this.event.dateEvent);

    this.eventService.updateEvent(this.id, this.event).subscribe({
      next: (res) => {
        alert('Bien modifié');
        this.router.navigate(['']);
      },
      error: (err) => console.log(err)
    });
  }

  formatDateForInput(date: any): string {
    const d = new Date(date);
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day = ('0' + d.getDate()).slice(-2);
    return `${d.getFullYear()}-${month}-${day}`;
  }

 
}
