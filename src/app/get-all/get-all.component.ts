import {Component, OnInit} from '@angular/core';
import {faBan, faEye, faPen} from '@fortawesome/free-solid-svg-icons';
import {Employee} from "../data/employee";
import {HttpClient} from "@angular/common/http";
import {EmployeeService} from "../data/employee.service";

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

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe(
      (data) => this.employees = data
    )
  }

}
