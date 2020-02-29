import { Injectable } from '@angular/core';
import {Blog} from '../models/blog';
import{HttpClient,HttpErrorResponse,HttpBackend} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  serviceUrl=environment.baseUrl;
  errorData:{};
  
  constructor(private http:HttpClient,private handler:HttpBackend) {
    this.http=new HttpClient(handler);
   }
  getBlogs()
  {
   return  this.http.get<Blog>(this.serviceUrl+"/adminBlogs").pipe(
       catchError(this.handleError)
     )   
  }
  getBlog(id: number) {
    debugger;
    return this.http.get<any>(this.serviceUrl + "/adminBlog/" + id).pipe(
      catchError(this.handleError)
    );
  }

  createBlog(blog) {
    return this.http.post<any>(this.serviceUrl + "/createBlog", blog)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateBlog(blog, id: number) {
    debugger;
    return this.http.post<any>(this.serviceUrl + "/updateBlog/" + id, blog)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteBlog(id: number) {
    debugger;
    return this.http.delete(this.serviceUrl + "/deleteBlog/" + id).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
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
