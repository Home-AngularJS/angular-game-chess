import { Component, OnInit } from '@angular/core';
import { Position } from '../../core/model/position';
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
  chessBishopPosition1$ = this.chessService.chessBishopPosition1$;
  chessBishopPosition2$ = this.chessService.chessBishopPosition2$;
  chessKnightPosition1$ = this.chessService.chessKnightPosition1$;
  chessKnightPosition2$ = this.chessService.chessKnightPosition2$;
  chessRookPosition1$ = this.chessService.chessRookPosition1$;
  chessRookPosition2$ = this.chessService.chessRookPosition2$;
  chessPawnPosition1$ = this.chessService.chessPawnPosition1$;
  chessPawnPosition2$ = this.chessService.chessPawnPosition2$;
  chessPawnPosition3$ = this.chessService.chessPawnPosition3$;
  chessPawnPosition4$ = this.chessService.chessPawnPosition4$;
  chessPawnPosition5$ = this.chessService.chessPawnPosition5$;
  chessPawnPosition6$ = this.chessService.chessPawnPosition6$;
  chessPawnPosition7$ = this.chessService.chessPawnPosition7$;
  chessPawnPosition8$ = this.chessService.chessPawnPosition8$;

  constructor(private chessService : ChessService) {
  }

  ngOnInit() {
  }

  handleSquareClick(position: Position) {
    this.chessService.moveChessKing(position);
    this.chessService.moveChessQueen(position);
    this.chessService.moveChessBishop1(position);
    this.chessService.moveChessBishop2(position);
    this.chessService.moveChessKnight1(position);
    this.chessService.moveChessKnight2(position);
    this.chessService.moveChessRook1(position);
    this.chessService.moveChessRook2(position);
    this.chessService.moveChessPawn1(position);
    this.chessService.moveChessPawn2(position);
    this.chessService.moveChessPawn3(position);
    this.chessService.moveChessPawn4(position);
    this.chessService.moveChessPawn5(position);
    this.chessService.moveChessPawn6(position);
    this.chessService.moveChessPawn7(position);
    this.chessService.moveChessPawn8(position);
  }

  xy(i): Position {
        console.log("in xy()");
        return {
            x: i % 8,
            y: Math.floor(i / 8)
        }
      }

   isBlack({ x, y }: Position) {
      //return true;
      console.log(x + "," + y)
      return (x + y) % 2 === 1;
   }

}
