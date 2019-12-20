import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string = "http://127.0.0.1:8000/api/list/";
  private _url1: string = "http://127.0.0.1:8000/api/create/";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }
  postEmployee(employee: IEmployee): Observable<IEmployee[]>{
    return this.http.post<any>(this._url1, employee)
    .pipe(catchError(this.errorHandler));

  }
  // deleteEmployee(id: string){
  //   return this.http.delete<IEmployee>(this.ur)
  // }


  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");

  }
}
