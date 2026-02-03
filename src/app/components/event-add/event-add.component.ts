import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-add',
  standalone: false,
  templateUrl: './event-add.component.html',
  styleUrl: './event-add.component.css'
})
export class EventAddComponent {

  selectedCover!: File;

  event = {
    titre: '',
    type: '',
    dateEvent: '',
    lieu: '',
    cover: ''
  };

  constructor(private eventService: EventService) {}

  save(form: any) {
    if (!form.valid) {
      alert("merci de saisir toutes les champs !");
      return;
    }

    if (this.selectedCover) {
      this.eventService.uploadCover(this.selectedCover).subscribe({
        next: (res) => {
          this.event.cover = res.secure_url as string;
          this.eventService.addEvent(this.event).subscribe(() => {
            alert("Event est bien ajouté");
            form.resetForm();
          });
        },
        error: (err) => console.log(err)
      });
    } else {
      this.eventService.addEvent(this.event).subscribe(() => {
        alert("Event est bien ajouté");
        form.resetForm();
      });
    }
  }

 
}
