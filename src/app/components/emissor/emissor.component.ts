import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emissor',
  templateUrl: './emissor.component.html',
  styleUrls: ['./emissor.component.css']
})
export class EmissorComponent implements OnInit {

  numero: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(){
    this.numero = Math.floor(Math.random() * 100)
  }

}
