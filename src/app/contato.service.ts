import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {


  contatosUrl = 'https://59ff7376-cecc-40e5-906d-5e728a3772de.mock.pstmn.io/contatos';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.contatosUrl}`);
  }
}
