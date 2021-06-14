import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sorting-techniques',
  templateUrl: './sorting-techniques.component.html',
  styleUrls: ['./sorting-techniques.component.css']
})
export class SortingTechniquesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
bubbleSort(sortingArr: number[]){
if(sortingArr.length == 0 ){
console.log(" Click Generate Array ")
}
else{
  for(let i=0; i < sortingArr.length; i++){
    for(let j=0; j < sortingArr.length-1; j++){
        if(sortingArr[j]>sortingArr[j+1]){
          let temp = sortingArr[j];
          sortingArr[j] =  sortingArr[j+1];
          sortingArr[j+1] = temp;
          
        }
    }
  }
}
return sortingArr;
}


}
