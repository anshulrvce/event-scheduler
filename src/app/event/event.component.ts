import { Component, OnChanges, Input } from '@angular/core';



@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnChanges {
  @Input() events;
  constructor() {}

  ngOnChanges() {
  }
  getStyle(event){
    return {
     'position': 'absolute',
     'background-color': 'white',
     'height': `${event.end - event.start}px`,
     'width': `${600 / (event.count)}px`,
     'left': `${10 +  (600 -  (600 * event.position / event.count  ))}px`,
     'top': `${event.start}px`,
     'border-bottom': '2px solid #AEAEAE',
     'border-left': '5px solid #44b188',
    }
  }
 }