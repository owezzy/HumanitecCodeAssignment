import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import {Program} from './program';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private programsUrl = 'api/programs';

  constructor(private http: HttpClient) { }

  getPrograms(): Observable<Program[]> {
    return this.http.get<Program[]>(this.programsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createProgram(program: Program): Observable<Program> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    program.id = null;
    return this.http.post<Program>(this.programsUrl, program, { headers: headers })
      .pipe(
        tap(data => console.log('createProgram: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteProgram(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.programsUrl}/${id}`;
    return this.http.delete<Program>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteProgram: ' + id)),
        catchError(this.handleError)
      );
  }

  updateProgram(program: Program): Observable<Program> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.programsUrl}/${program.id}`;
    return this.http.put<Program>(url, program, { headers: headers })
      .pipe(
        tap(() => console.log('updateProgram: ' + program.id)),
        // Return the product on an update
        map(() => program),
        catchError(this.handleError));
  }
  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
