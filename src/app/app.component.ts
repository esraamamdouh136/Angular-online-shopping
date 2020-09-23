import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-shopping-cart';
  course = [1 , 2];
  show: boolean = true;
  esraa : string = "esraa"
   text = "hide" ;
   view = "map"
//   textbtn()  {
//     if (this.show == true ){
//     this.text = "show";
//     this.show = false;


//   }
//   else {
//     this.text = "hide";
//     this.show = true;

//   }
// }

list() {
  this.view = "list";
}
  
}
