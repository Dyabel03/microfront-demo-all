import { filter, map, Subject } from 'rxjs';

export class EventBusService {

  subject$;

  constructor() {
    this.subject$ = new Subject(); 
  }

  emit(event) {
    this.subject$.next(event);
  }

  on(eventName, action) {
    return this.subject$.pipe(
      filter( (e:any) => e.name === eventName),
      map( (e) => e["data"])).subscribe(action);
  }
} 