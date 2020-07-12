import { Component, OnInit, HostListener } from '@angular/core';
import { EventService } from '../core/services/event.service';



@Component({
 selector: 'app-scheduler',
 templateUrl: './scheduler.component.html',
 styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {

events: Array<any> = [];
 timeArray: Array<string> = [];
 @HostListener('document:listenToLayout', ['$event'])
 updateLayout(event) {
 }


 constructor(private eventService: EventService) { }

 layOutDay(eventsData){
  this.events =  this.eventService.processEvents(eventsData);
  const customEvent = new CustomEvent('listenToLayout');
  document.dispatchEvent(customEvent);
}


 // tslint:disable-next-line: typedef
 ngOnInit() {
   const eventProcessor = this.layOutDay.bind(this);
   window['layOutDay'] = eventProcessor;
   eventProcessor(this.eventService.getEvents());
   this.timeArray = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '1:00',
    '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00', '5:30', '6:00'];
 }
}

