import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SseService {

  constructor() { }

  /**
   * @description Open Connection with Server
   * @returns {EventSource}
   */
  getEventSource(): EventSource {
    const url = `${environment.urlSse}/emitter`;
    return new EventSource(url);
  }
}
