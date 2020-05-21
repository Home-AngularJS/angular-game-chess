import { Component, OnInit } from '@angular/core';
import { Coord } from '../../core/model/coord';
import { ChessService } from '../../core/service/chess.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  // TODO: Не уверен что карта работает в оригинальном коде это кажется излишним так как мы все равно его обновляем...
  // TODO: (чтобы сделать математику заполняем с 0 по 63)
  //sixtyFour = new Array(64).fill(0);
  sixtyFour = new Array(64).fill(0).map((_, i) => i);

  kingPosition$ = this.chessService.kingPosition$;
  queenPosition$ = this.chessService.queenPosition$;
  bishopPosition$ = this.chessService.bishopPosition$;
  knightPosition$ = this.chessService.knightPosition$;
  pawnPosition$ = this.chessService.pawnPosition$;
  rookPosition$ = this.chessService.rookPosition$;

  constructor(private chessService : ChessService) {
  }

  ngOnInit() {
  }

  handleSquareClick(pos: Coord) {
    this.chessService.moveKing(pos);
    this.chessService.moveQueen(pos);
    this.chessService.moveBishop(pos);
    this.chessService.moveKnight(pos);
    this.chessService.movePawn(pos);
    this.chessService.moveRook(pos);
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
