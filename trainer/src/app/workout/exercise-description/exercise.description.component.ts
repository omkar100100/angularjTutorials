import { Component,OnInit,Input,ViewEncapsulation } from '@angular/core';

@Component({
	selector:'exercise-description',
	template:'Description: {{description}}',
	styles:[]
})


export  class ExerciseDescriptionComponent implements OnInit{
	@Input() description: string;
	 steps: string;
	constructor(){}
	ngOnInit(){}
}