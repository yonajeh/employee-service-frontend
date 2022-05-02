import {Injectable} from '@angular/core';
import {Employee} from "./employee";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  url: string = 'http://localhost:8089/employees';

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  create(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, employee);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id);
  }

  getOne(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/' + id);
  }
}
