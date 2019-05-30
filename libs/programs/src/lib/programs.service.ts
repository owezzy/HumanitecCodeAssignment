import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { ProgramModel } from './program.model';
import { catchError, switchMap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { NotificationService } from '@humanitec/core-data';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  model = 'programs';

  constructor(
    private  http: HttpClient,
    private notificationService: NotificationService
  ) { }

  getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<ProgramModel[]>(this.getUrl())
  }

  load(id) {
    return this.http.get<ProgramModel>(this.getUrlForId(id));
  }

  loadByActivity(activityId: string) {
    return this.http.get<ProgramModel[]>(this.getUrl(),{params: {activityId}})
      .pipe(
        switchMap(programs => {
          if (programs.length) {
            return of(programs)
          } else {
            return throwError(`No activities exists for Program with ID ${activityId}`)
          }
        }),
        catchError(error => {
          this.notificationService.emit(error);

          return throwError(error)
        })
      )
  }

  create(program: ProgramModel) {
    return this.http.post(this.getUrl(), program);
  }

  update(program: ProgramModel) {
    return this.http.patch(this.getUrlForId(program.id), program);
  }

  delete(program: ProgramModel) {
    return this.http.delete(this.getUrlForId(program.id));
  }
}
