import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
const today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 2);
const ETZI_STR = tomorrow.toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: TODAY_STR,
    end: ETZI_STR
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: TODAY_STR + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'Gaur event -2',
    start: ETZI_STR
  }

];

export function createEventId() {
  return String(eventGuid++);
}
