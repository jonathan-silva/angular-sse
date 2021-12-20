import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { SseService } from '../sse/sse.service';

export interface ISseEvent {
  id: number,
  recipientId: number,
  text: string,
  createdAt: any,
  read: boolean,
  readAt: any
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private readonly _zone: NgZone,
    private readonly _sseService: SseService
  ) { }

  /**
   * @description Get List of events from server
   * @returns Observable<any>
   */
  getServerSentEvent(): Observable<any> {
    return new Observable((observer: any) => {
      const eventSource: EventSource = this._sseService.getEventSource();

      eventSource.onmessage = event  => {
        this._zone.run(() => {
          observer.next(event);
        });
      };

      eventSource.onerror = error => {
        this._zone.run(() => {
          observer.error(error);
        })
      }
    })
  }
}
