import { Component } from '@angular/core';

import { Pessoa } from './pessoa/pessoa.model';

@Component({
  selector: 'ear-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pessoas: Pessoa[] = [
    
    {nome:'Ana Paula', idade:22, maiorIdade: true},
    {nome:'Laura', idade:17, maiorIdade: false},
    {nome:'Amanda', idade:16, maiorIdade: false}
  ]
}
