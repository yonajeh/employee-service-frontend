import {Component, OnInit} from '@angular/core';
import {faBan, faEye, faPen} from '@fortawesome/free-solid-svg-icons';
import {Employee} from "../data/employee";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {
  faShow = faEye;
  faUpdate = faPen;
  faDelete = faBan;


  employees: Employee [] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Employee []>('http://localhost:8089/employees').subscribe(
      (data) => this.employees = data
    )
  }

}
