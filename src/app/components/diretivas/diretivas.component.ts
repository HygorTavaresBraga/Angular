import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {

  txtSizeS: String = '20px'
  txtSizeN: Number = 20
  color: String = '#005752'

  underTxt = 'underTxt'
  classes = ['txt','behindTxt']

  cursos: String[] = ['Técnico em Informática','Desenvolvedor Java','Administrador de Redes']

  saldo: String = 'R$4.259,63'
  mostraSaldo: Boolean = true;

  alimentos: String[] = ['Maça','Banana','Uva','Abacaxi','Pêra']
  
  constructor() { }

  ngOnInit(): void {
  }

  mostrarSaldo(){
    this.mostraSaldo = !this.mostraSaldo
  }

}
