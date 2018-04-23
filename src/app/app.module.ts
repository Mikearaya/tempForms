import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormeventComponent } from './formevent/formevent.component';
import { LoopBackComponent } from './loop-back/loop-back.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormeventComponent,
    LoopBackComponent,
    HeroFormComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
