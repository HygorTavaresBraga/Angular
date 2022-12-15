import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-operator',
  templateUrl: './pipe-operator.component.html',
  styleUrls: ['./pipe-operator.component.css']
})
export class PipeOperatorComponent {
  nome = "hygor braga";
  data = new Date();
}
