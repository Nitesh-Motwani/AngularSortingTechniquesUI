import { Component } from '@angular/core';
import { SortingTechniquesComponent } from './sorting-techniques/sorting-techniques.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  sortingType: SortingTechniquesComponent = new SortingTechniquesComponent();
  arr:number[] = [];
  
  title = 'Just-Imagine-Sorting';

  randomInteger(min : number, max : number) : number {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
   
  }

  sliderValueApp(item:string){
    if(item === "bubble"){
     this.arr = this.sortingType.bubbleSort(this.arr);
    }
    else{
      let x = Number(item);
      this.arr=[];
      for(let i=1; i<=x; i++){
          this.arr.push(this.randomInteger(10,100));
          console.log(this.arr);
      }
    }
   
  }



}
