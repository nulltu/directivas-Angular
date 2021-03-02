import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  arrayDeClases: string[];

  constructor() { 
    this.arrayDeClases = ['semaforo'];
    this.arrayDeClases.push('redondo');
  }

  ngOnInit(): void {
  }

}
