import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Olá';

  cliente = [
    {
      nome: 'Alexandre',
      sexo: 'MAsculino',
      idade: 20
    },
    {
      nome: 'Roberto',
      sexo: 'Masculino',
      idade: 33
    },
    {
      nome: 'Maura',
      sexo: 'Feminino',
      idade: 23
    },
    {
      nome: 'Claudia',
      sexo: 'Feminino',
      idade: 22
    },
  ]

  constructor() {
  }

  // Diretivas estruturais

  // *ngFor

}
