import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventAddComponent } from './components/event-add/event-add.component';
import { EventUpdateComponent } from './components/event-update/event-update.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventAddComponent,
    EventUpdateComponent,
    EventDetailsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
