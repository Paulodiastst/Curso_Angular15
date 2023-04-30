import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Angular';

  imgUrl = "https://kinsta.com/pt/wp-content/uploads/sites/3/2022/07/angular-vs-vue-1024x512.jpg";

  constructor() {
  }

  chamarFuncao(){
    console.log("Esse é um click")
  }

  //<---- 4 tipo de data Binding ---->

  // Interpretação {{title}}

  // Property bind <img [src]="imgUrl">

  // Eventy binding <button (click)="chamarFuncao()">

  // Two-way databinding < input [(ngModel)]="title">

}
