import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/interfaces/Produto';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  produto: Produtos[] = [
                          { name: 'Arroz', type: 'Alimento', price: 10 },
                          { name: 'Desinfetante', type: 'Produto de limpeza', price: 15 }
                        ]

  constructor() { }

  ngOnInit(): void {
  }

}
