import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() isBlackSquare: boolean;

  constructor() { }

  ngOnInit() {
  }

  getStyle() {
      return this.isBlackSquare
        ? { backgroundColor: '#eed2ad' }
        : { backgroundColor: '#c86835' }
  }
}
