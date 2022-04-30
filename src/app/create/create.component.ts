import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../data/employee";

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

  constructor(private http: HttpClient) {
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

    this.http.post('http://localhost:8089/employees', employee)
      .subscribe(
        (data) => console.log(data)
      )

  }
}
