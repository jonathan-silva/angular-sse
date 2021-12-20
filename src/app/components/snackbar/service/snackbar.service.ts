import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(public snackBar: MatSnackBar) {}

  /**
   * @description Show Snack Bar
   * @param component any
   * @param text string
   */
  openSnackBar(component: any, text: string): void {
    console.log(text);
    this.snackBar.openFromComponent(component, {
      duration: 1500,
      data: text,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['mat-toolbar', 'mat-accent']
    });
  }
}
