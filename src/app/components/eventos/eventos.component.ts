import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  exibir: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  exibirOcultarMensagem():void{
    this.exibir = !this.exibir; //Toggle
  }

}
