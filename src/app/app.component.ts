import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivas';

  colorStyle:any;

  constructor(){
    this.colorStyle = {
      color: 'red',
      fontSize: '24px'
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

}
