import { Component, OnInit, Input } from '@angular/core';
import {Coord} from '../../core/model/coord';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() black: boolean;

  constructor() { }

  ngOnInit() {
  }

  getStyle() {
      return this.black
          ? { backgroundColor: 'black', color: 'white' }
          : { backgroundColor: 'white', color: 'black' }
  }



}
