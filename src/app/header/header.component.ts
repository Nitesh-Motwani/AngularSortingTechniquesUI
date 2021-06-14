import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  
  constructor() {
    
   }

  ngOnInit(): void {
  }
  emitValues(event: Event ){
   console.log((event.target as HTMLInputElement).value);
   this.newItemEvent.emit((event.target as HTMLInputElement).value);
  }

}
