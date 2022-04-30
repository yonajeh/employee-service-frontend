import {Component, OnInit} from '@angular/core';
import {Employee} from "../data/employee";
import {EmployeeService} from "../data/employee.service";

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  id: string = '';
  nom: string = '';
  prenom: string = '';
  email: string = '';

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
  }

  create(e: any) {
    e.preventDefault();
    let employee: Employee = {
      idEmployee: this.id,
      nomEmployee: this.nom,
      prenomEmployee: this.prenom,
      email: this.email
    }

    this.employeeService.create(employee)
      .subscribe(
        (data) => console.log(data),
      )

  }
}
