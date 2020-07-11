
export interface Event {
    title: string;
    subtitle: string;
    start: number;
    end: number;
    id: number;
    count: number;
    collidingEvents: Array<number>;
}
