import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contatos = [
    { id: 1, nome: 'Alexandre', email: 'alexandre@email.com'},
    { id: 2, nome: 'Thiago', email: 'thiago@email.com'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
