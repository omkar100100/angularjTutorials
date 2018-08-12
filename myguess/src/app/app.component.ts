import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `<div><p>Welcome {{name}}
	             <input type="number" [value]="guess" (input)="guess=$event.target.value" />
				 <button (click)="verifyGuess()" class="btn btn-primary btn-sm">Verify</button>
				 <button (click)="initialize()" class="btn btn-warning btn-sm">Restart</button>
				<span class="badge"> No of Tries:{{noOfTries}}</span>
				<label>Deviation:{{deviation}}</label>
				
				</p>
				<p *ngIf="deviation<0" class="alert alert-warning">Your guess is higher.</p>
				<p *ngIf="deviation>0" class="alert alert-warning">Your guess is lower.</p>
				<p *ngIf="deviation===0" class="alert alert-success">Yes! That's it.</p>
	  </div>`
	
})

export class AppComponent{
	name='Chandra Sekhar';
	
	deviation: number;
	noOfTries: number;
	original: number;
	guess: number;
	
	constructor(){
		this.initializeGame();
	}
	
	initializeGame(){
			this.noOfTries = 0;
			this.original = Math.floor((Math.random() * 1000) + 1);
			this.guess = null;
			this.deviation = null;
	}
	
	verifyGuess(){
		this.deviation=this.original-this.guess;
		this.noOfTries=this.noOfTries+1;
	}
}