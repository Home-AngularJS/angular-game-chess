import { Component, OnInit } from '@angular/core';
import { Coord } from '../../core/model/coord';
import { GameService } from '../../core/service/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  // Не уверен что карта работает в оригинальном коде, это кажется излишним так как мы все равно его обновляем...
  // (чтобы сделать математику позже заполняем с 0 по 63)
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
