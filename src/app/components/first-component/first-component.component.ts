import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  nome:string = 'Hygor'
  
  idade:number = 20
  
  experiencia:string[] = ['HTML','CSS','JS','Java','PHP','Angular']
  
  dados = {
    rg: '12.345.678-9',
    cpf: '123.456.789-10'
  }


  constructor() { }

  ngOnInit(): void {
  }

}