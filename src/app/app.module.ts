import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarService } from './components/snackbar/service/snackbar.service';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { NotificationService } from './components/notification/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [
    SnackbarService,
    NotificationService,
    /*{
      provide: APP_INITIALIZER,
      useFactory: (ns: NotificationService) => () => { return ns.getServerSentEvent() },
      deps: [NotificationService],
      multi: true
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
