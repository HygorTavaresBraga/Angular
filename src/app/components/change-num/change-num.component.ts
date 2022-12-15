import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-num',
  templateUrl: './change-num.component.html',
  styleUrls: ['./change-num.component.css']
})
export class ChangeNumComponent implements OnInit {

  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.changeNumber.emit();
  }

}
