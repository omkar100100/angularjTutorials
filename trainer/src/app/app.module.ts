import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent  } from './app.component';
import { WorkoutModule  } from './workout/workout.module';

@NgModule({
	declarations: [ AppComponent ],
	imports : [ BrowserModule,WorkoutModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})


export class AppModule { }

