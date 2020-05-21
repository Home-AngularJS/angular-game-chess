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

  chessKingPosition$ = this.chessService.chessKingPosition$;
  chessQueenPosition$ = this.chessService.chessQueenPosition$;
  chessBishopPosition$ = this.chessService.chessBishopPosition$;
  chessKnightPosition$ = this.chessService.chessKnightPosition$;
  chessPawnPosition$ = this.chessService.chessPawnPosition$;
  chessRookPosition$ = this.chessService.chessRookPosition$;

  constructor(private chessService : ChessService) {
  }

  ngOnInit() {
  }

  handleSquareClick(pos: Coord) {
    this.chessService.moveChessKing(pos);
    this.chessService.moveChessQueen(pos);
    this.chessService.moveChessBishop(pos);
    this.chessService.moveChessKnight(pos);
    this.chessService.moveChessPawn(pos);
    this.chessService.moveChessRook(pos);
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
