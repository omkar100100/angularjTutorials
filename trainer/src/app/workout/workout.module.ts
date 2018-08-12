import { WorkOutComponent } from './workout.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExerciseDescriptionComponent }  from './exercise-description/exercise.description.component';


@NgModule({
	imports: [ CommonModule ],
	exports:  [ WorkOutComponent ],
	declarations: [WorkOutComponent,ExerciseDescriptionComponent]
})

export class WorkoutModule {}