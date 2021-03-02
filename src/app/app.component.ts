import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivas';

  colorStyle:any;
  mostrar:boolean;
  textoBoton:string;

  constructor(){

    this.mostrar = true;
    this.textoBoton ="ocultar texto";


    this.colorStyle = {
      color: 'red',
      fontSize: '20px'
    }
  }

  ocultarParrafo(){
      this.mostrar = !this.mostrar;
      if(this.mostrar){
        this.textoBoton = "ocultar texto"
      }else{ 
        this.textoBoton = "mostrar texto"
      }
  }

  cambiarColor(pColor:string) {
  switch (pColor) {
    case 'o':
      this.colorStyle.color='orange';
      break;
      case 'r':
      this.colorStyle.color='red';
      break;
      case 'b':
      this.colorStyle.color='blue';
      break;
   }
  }

  onChange($event:any){
    this.colorStyle.fontSize = `${$event.target.value}px`;
  }

}
