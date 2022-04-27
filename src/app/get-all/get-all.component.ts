import { Component, OnInit } from '@angular/core';
import {faBan, faEye, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {
  faShow = faEye;
  faUpdate = faPen;
  faDelete = faBan;

  constructor() { }

  ngOnInit(): void {
  }

}
