import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventAddComponent } from './components/event-add/event-add.component';
import { EventUpdateComponent } from './components/event-update/event-update.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';

const routes: Routes = [
  {path:"events/list",component:EventListComponent},
  {path:"events/add",component:EventAddComponent},
  {path:"events/update/:id",component:EventUpdateComponent},
  {path:"events/details/:id",component:EventDetailsComponent},
  {path:"",redirectTo:"events/list",pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
