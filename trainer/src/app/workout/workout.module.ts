import { WorkOutComponent } from './workout.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
	imports: [ CommonModule ],
	exports:  [ WorkOutComponent ],
	declarations: [WorkOutComponent]
})

export class WorkoutModule {}