export const MOCKS = {
    eventMock: [
        {
          start: 30,
          end: 60,
        },
        {
          start: 60,
          end: 120
        },
        {
          start: 300,
          end: 360
        },
        {
          start: 90,
          end: 300,
        }
        ],
    eventPositionMock : [
    {
      start: 30,
      end: 60,
      id: 0,
      count: 1,
      collidingEvents: [ 0 ]
    },
    {
      start: 60,
      end: 120,
      id: 1,
      count: 2,
      collidingEvents: [ 1, 2 ]
    },
    {
      start: 90,
      end: 300,
      id: 2,
      count: 2,
      collidingEvents: [ 1, 2 ]
    },
    {
      start: 300,
      end: 360,
      id: 3,
      count: 1,
      collidingEvents: [ 3 ]
    }
  ],

colSpanEvents: [
    {
      start: 30,
      end: 60,
      id: 0,
      count: 1,
      collidingEvents: [ 0 ]
    },
    {
      start: 60,
      end: 120,
      id: 1,
      count: 2,
      collidingEvents: [ 1, 2 ]
    },
    {
      start: 90,
      end: 300,
      id: 2,
      count: 2,
      collidingEvents: [ 1, 2 ]
    },
    {
      start: 300,
      end: 360,
      id: 3,
      count: 1,
      collidingEvents: [ 3 ]
    }
  ]
};
