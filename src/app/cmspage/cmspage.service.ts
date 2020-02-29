import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse, HttpHeaders,HttpBackend } from '@angular/common/http';
import {Page} from './page';
import {Contact} from './contact';
import {throwError, from} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment}from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CmspageService {

  serviceUrl=environment.baseUrl;
  errorData:{};

  // httpOptions = {
  //   headers: new HttpHeaders({'Content-Type': 'application/json'}).append('Access-Control-Allow-Origin', '*')
  // };
  constructor(private http:HttpClient,private handler: HttpBackend) { 
    this.http = new HttpClient(handler);
  }

  
  getPage(slug:string)
  {
    return this.http.get<Page>(this.serviceUrl+"/page/"+slug).pipe(
      catchError(this.handleError)
     );

  }
  saveContact(fromdata:Contact)
  {
     return this.http.post<Contact>(this.serviceUrl+'/addContact',fromdata).pipe(
          catchError(this.handleError)
        )
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong.

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
