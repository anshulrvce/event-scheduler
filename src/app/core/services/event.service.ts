import { Injectable } from '@angular/core';

import { Event } from '../interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {

  processEvents(events: Array<any>): Array<any>  {
    events = events.sort( (e1, e2) => {
      if ( e1.start < e2.start ) { return -1; }
      if (e1.start > e2.start) { return 1; }
      if (e1.end < e2.end) { return -1; }
      if (e1.end > e2.end) { return 1; }
      return 0;
    });
    for ( let i = 0; i < events.length; i++) {
      events[i].count = 1;
      let endTime = null;
      events[i].id = i;
      events[i].collidingEvents = [];
      for (let j = 0; j < events.length; j++){
          if ( events[i].end > events[j].start && events[i].start < events[j].end ){
                if ((events[j].start < endTime || endTime === null) && i !== j ){
                    endTime = events[j].end;
                    events[i].count = events[i].count + 1;
              }
                events[i].collidingEvents.push(j);

          }
      }
    }
    for (let i = 0; i < events.length; i++ ){
      console.log('event numebr', i);
      let position = 1;
      let flag = true;
      const event = events[i];
      for (let j = 1; j <= event.count; j++ ){

        for (let k = 0; k < event.collidingEvents.length; k++){
          console.log(events[event.collidingEvents[k]], 'events---------', events[event.collidingEvents[k]].position, j);
          if (events[event.collidingEvents[k]].position && events[event.collidingEvents[k]].position === j){
          flag = true;
          break;
        } else{
          console.log('here--falg');
          flag = false;
        }
      }
        if (flag === false){
        console.log('break ', j);
        position = j;
        break;
      }
      }

      events[i].position = position;
    }

    console.log(JSON.stringify(events));
    // tslint:disable-next-line: prefer-for-of
    for ( let i = 0; i < events.length; i++ ){
        let count = events[i].count;

        for ( let j = 0; j < events[i].collidingEvents.length; j++ ){
            if (events[events[i].collidingEvents[j]].count > count){
                count = events[events[i].collidingEvents[j]].count;
            }
        }
        events[i].count = count;
    }

    console.log('events--------', JSON.stringify(events));
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
