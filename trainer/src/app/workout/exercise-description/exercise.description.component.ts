import { Component,OnInit,Input,ViewEncapsulation } from '@angular/core';

@Component({
	selector:'exercise-description',
	templateUrl:'./exercise.description.component.html',
	styles:[]
})


export  class ExerciseDescriptionComponent implements OnInit{
	@Input() description: string;
	@Input() steps: string;
	
	timesContentRequested:number;
	
	constructor(){}
	ngOnInit(){
		this.timesContentRequested=0;
	}
	
	getContent(){
		
		this.timesContentRequested +=1;
		return "hello world";;
	}
	
	
}