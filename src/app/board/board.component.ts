import { Component, OnInit } from '@angular/core';
import {Coord} from '../coord';
import {GameService} from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  // not sure what the map is doing here in original code seems superflous since we're newing one up anyway???
  // nope he is filling the sixty-four with 0 through 63 so he can do math on it later.
  sixtyFour = new Array(64).fill(0).map((_, i) => i);
  //sixtyFour = new Array(64).fill(0);

  knightPosition$ = this.gameService.knightPosition$;


  constructor(private gameService : GameService) {
      console.log("in board constructor");
  }

  ngOnInit() {
  }

  handleSquareClick(pos: Coord) {
      this.gameService.moveKnight(pos);
  }


  xy(i): Coord {
        console.log("in xy()");
        return {
            x: i % 8,
            y: Math.floor(i / 8)
        }
      }



   isBlack({ x, y }: Coord) {
      //return true;
      console.log(x + "," + y)
      return (x + y) % 2 === 1;
   }
}
