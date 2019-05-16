import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { NotificationService } from '../notification/notification.service';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ErrorInterceptor implements HttpInterceptor {

  constructor(private notificationService: NotificationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(request)
      .pipe(
        catchError(error =>{
          if (error instanceof HttpErrorResponse) {
            this.notificationService.emit(`${request.url} | ${error.status} - ${error.statusText}`);
          }
          return throwError(error)
        })
      )
  }

}
