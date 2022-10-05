import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botaomenu',
  templateUrl: 'botaomenu.component.html',
  styles: [
  ]
})
export class BotaomenuComponent implements OnInit {

  texto: string;
  valorCampo: string;
  nome: string;
  usuario: string;
  senha: string;

  constructor() { }

  ngOnInit(): void {
    this.texto = "Clique aqui";
    this.valorCampo = "Teste";
    this.nome = "Leonardo";
    this.usuario = "leo";
    this.senha = "123";
  }
  
  clicar(){
    this.texto = "Clicou"
  }

}
