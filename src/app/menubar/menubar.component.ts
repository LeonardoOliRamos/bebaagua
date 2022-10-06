import { Component, OnInit } from '@angular/core';
import {MegaMenuItem, SelectItem} from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  items: MegaMenuItem[];
  opcoesConta: any[];
  selectedOpcao: any;

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.opcoesConta = [];
    this.opcoesConta.push({label: 'Criar conta', value: 1});
    this.opcoesConta.push({label: 'Minha Conta', value: 2});
  }

}
