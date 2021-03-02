import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styles: [
  ]
})
export class BuclesComponent implements OnInit {

  personas:any[];

  constructor() {
    this.personas=[
      {nombre: 'Rusbent', apellido:'Matta', edad:30},
      {nombre: 'Micaela', apellido:'Oracle', edad:28},
      {nombre: 'Florencia', apellido:'Vscode', edad:17},
      {nombre: 'Patricia', apellido:'Python', edad:21},
      {nombre: 'Juliana', apellido:'Azure', edad:50},
    ]
   }

  ngOnInit(): void {
  }

}
