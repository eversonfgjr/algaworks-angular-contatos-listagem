import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  // contatos = [
  //   { "id": 1, "nome": "Alexandre", "email": 'alexandre@email.com'},
  //   { "id": 2, "nome": "Thiago", "email": 'thiago@email.com'}
  // ]

  contatos:Array<any>;

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.contatoService.listar().subscribe(dados => this.contatos = dados);
  }

}
