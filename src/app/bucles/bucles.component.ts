import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit {

  personas:any[];

  constructor() {
    this.personas=[
      {nombre: 'Rusbent', apellido:'Matta', edad:30, calle: 'Miroquesada 320', telefono: '3517878048'},
      {nombre: 'Micaela', apellido:'Oracle', edad:28, calle: 'Lima 95', telefono: '3517700279'},
      {nombre: 'Florencia', apellido:'Vscode', edad:17, calle: 'Presta 1223', telefono: '114803930'},
      {nombre: 'Patricia', apellido:'Python', edad:21, calle: 'Lamarca 5400', telefono: '114866266'}, 
      {nombre: 'Juliana', apellido:'Azure', edad:50, calle: 'Corrientes 12', telefono: '351984032'},
    ]
   }

  ngOnInit(): void {
  }

}
