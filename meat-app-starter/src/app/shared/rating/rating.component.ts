import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  rates: number[] = [1,2,3,4,5];
  rate: number=0;

  @Output() rated = new EventEmitter<number>();

  previousRate: number;

  constructor() { }

  ngOnInit() {
  }

  setRate(itemRate: number){

    this.rate = itemRate;
    this.previousRate = undefined;
    this.rated.emit(this.rate);
  }

  setTemporaryRate(itemRate: number){

    if(this.previousRate === undefined){
      this.previousRate = this.rate;
    }
    this.rate = itemRate;
  }

  clearTemporaryRate(){

    if(this.previousRate !== undefined){
      this.rate = this.previousRate;
      this.previousRate = undefined;
    }
  }

}
