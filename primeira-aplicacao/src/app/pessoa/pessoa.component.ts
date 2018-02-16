import { Component, OnInit, Input } from '@angular/core';

import { Pessoa } from './pessoa.model';

@Component({
  selector: 'ear-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  @Input() pessoa: Pessoa;

  constructor() {

  }

  onClick(){

    console.log(`Nome Pessoa: ${this.pessoa.nome}`)
  }

  ngOnInit() {
  }

}
