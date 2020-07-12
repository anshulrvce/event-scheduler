import { Injectable } from '@angular/core';

import { Event } from '../interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {

  calculateColSpanEvents(events: Array<any>): Array<any> {
    // tslint:disable-next-line: prefer-for-of
    for ( let i = 0; i < events.length; i++ ){
      let count = events[i].count;
      // tslint:disable-next-line: prefer-for-of
      for ( let j = 0; j < events[i].collidingEvents.length; j++ ){
          if (events[events[i].collidingEvents[j]].count > count){
              count = events[events[i].collidingEvents[j]].count;
          }
      }
      events[i].count = count;
  }
    return events;
  }

  positonEvents(events: Array<any>): Array<any>{
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < events.length; i++ ){
      let position = 1;
      let flag = true;
      const event = events[i];
      for (let j = 1; j <= event.count; j++ ){
        // tslint:disable-next-line: prefer-for-of
        for (let k = 0; k < event.collidingEvents.length; k++){
        if (events[event.collidingEvents[k]].position && events[event.collidingEvents[k]].position === j){
          flag = true;
          break;
        } else{
          flag = false;
        }
      }
        if (flag === false){
          position = j;
          break;
        }
      }
      events[i].position = position;
    }
    return events;
  }

  processEvents(events: Array<any>): Array<any>  {
    events =   events = events.sort( (e1, e2) => {
      if ( e1.start < e2.start ) { return -1; }
      if (e1.start > e2.start) { return 1; }
      if (e1.end < e2.end) { return -1; }
      if (e1.end > e2.end) { return 1; }
      return 0;
    });

    for ( let i = 0; i < events.length; i++) {
      events[i].count = 1;
      let endTime = null;
      let flag;
      const endArray = [];
      events[i].id = i;
      events[i].collidingEvents = [];
      for (let j = 0; j < events.length; j++){
          flag = false;
          if ( events[i].end > events[j].start && events[i].start < events[j].end  ){
                if ((events[j].start < endTime || endTime === null) && i !== j ){
                  endArray.push(events[j].end);
                  console.log(endArray);
                  for (let k = 0; k < endArray.length; k++){
                      if (events[j].start >= endArray[k]){
                        endArray[k] = events[j].end;
                        flag = true;
                      }
                    }
                  if (flag === false){
                      events[i].count = events[i].count + 1;
                    }
              }
                if (i !== j) {
              endTime = events[j].end;
              }
                events[i].collidingEvents.push(j);

          }
      }
    }
    // tslint:disable-next-line: prefer-for-of
    events = this.calculateColSpanEvents(events);
    events = this.positonEvents(events);

    console.log(events)
    return events;
  }
  getEvents(): Array<Event> {
    return [
      {
        title: 'Greeting Meeting',
        subtitle: 'Meeting Room A',
        start: 30,
        end: 60,
        id: 1,
        count: 1,
        collidingEvents: [],
      },
      {
        title: 'Design Meet',
        subtitle: 'Meeting Room C',
        start: 60,
        end: 120,
        id: 2,
        count: 1,
        collidingEvents: [],
      },
      {
        title: 'Development Meet',
        subtitle: 'Meeting Room D',
        start: 300,
        end: 360,
        id: 3,
        count: 1,
        collidingEvents: [],
      },
      {
        title: 'Architecture Meet',
        subtitle: 'Meeting Room A',
        start: 90,
        end: 300,
        id: 4,
        count: 1,
        collidingEvents: [],
      },
      {
        title: 'Architecture Meet',
        subtitle: 'Meeting Room A',
        start: 20,
        end: 300,
        id: 4,
        count: 1,
        collidingEvents: [],
      },
      {
        title: 'Architecture Meet',
        subtitle: 'Meeting Room A',
        start: 220,
        end: 389,
        id: 4,
        count: 1,
        collidingEvents: [],
      },
      {
        title: 'Architecture Meet2',
        subtitle: 'Meeting Room D',
        start: 40,
        end: 300,
        id: 5,
        count: 1,
        collidingEvents: [],
      },
      {
        title: 'Product Meet',
        subtitle: 'Meeting Room C',
        start: 120,
        end: 180,
        id: 6,
        count: 1,
        collidingEvents: [],
      }
    ]; // method returns an array of cities
  }
}
