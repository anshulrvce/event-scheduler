import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';
import { MOCKS } from '../mocks/events.mock';
import {EXPECTED} from '../mocks/result.mock';

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('positonEvents should return expected value', () => {
    expect(service.positonEvents(MOCKS.eventPositionMock)).toEqual(EXPECTED.positionedEvents);
  });

  it('calculateColSpanEvents should return expected value', () => {
    expect(service.calculateColSpanEvents(MOCKS.colSpanEvents)).toEqual(EXPECTED.colSpanEvents);
  });

  it('processEvents should return expected value', () => {
    expect(service.processEvents(MOCKS.eventMock)).toEqual(EXPECTED.processedEvents);
  });
});
