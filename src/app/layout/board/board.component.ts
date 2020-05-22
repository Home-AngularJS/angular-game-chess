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

  chessBlackKingPosition$ = this.chessService.chessBlackKingPosition$;
  chessBlackQueenPosition$ = this.chessService.chessBlackQueenPosition$;
  chessBlackBishopPosition1$ = this.chessService.chessBlackBishopPosition1$;
  chessBlackBishopPosition2$ = this.chessService.chessBlackBishopPosition2$;
  chessBlackKnightPosition1$ = this.chessService.chessBlackKnightPosition1$;
  chessBlackKnightPosition2$ = this.chessService.chessBlackKnightPosition2$;
  chessBlackRookPosition1$ = this.chessService.chessBlackRookPosition1$;
  chessBlackRookPosition2$ = this.chessService.chessBlackRookPosition2$;
  chessBlackPawnPosition1$ = this.chessService.chessBlackPawnPosition1$;
  chessBlackPawnPosition2$ = this.chessService.chessBlackPawnPosition2$;
  chessBlackPawnPosition3$ = this.chessService.chessBlackPawnPosition3$;
  chessBlackPawnPosition4$ = this.chessService.chessBlackPawnPosition4$;
  chessBlackPawnPosition5$ = this.chessService.chessBlackPawnPosition5$;
  chessBlackPawnPosition6$ = this.chessService.chessBlackPawnPosition6$;
  chessBlackPawnPosition7$ = this.chessService.chessBlackPawnPosition7$;
  chessBlackPawnPosition8$ = this.chessService.chessBlackPawnPosition8$;

  constructor(private chessService : ChessService) {
  }

  ngOnInit() {
  }

  handleSquareClick(position: Position) {
    this.chessService.moveChessBlackKing(position);
    this.chessService.moveChessBlackQueen(position);
    this.chessService.moveChessBlackBishop1(position);
    this.chessService.moveChessBlackBishop2(position);
    this.chessService.moveChessBlackKnight1(position);
    this.chessService.moveChessBlackKnight2(position);
    this.chessService.moveChessBlackRook1(position);
    this.chessService.moveChessBlackRook2(position);
    this.chessService.moveChessBlackPawn1(position);
    this.chessService.moveChessBlackPawn2(position);
    this.chessService.moveChessBlackPawn3(position);
    this.chessService.moveChessBlackPawn4(position);
    this.chessService.moveChessBlackPawn5(position);
    this.chessService.moveChessBlackPawn6(position);
    this.chessService.moveChessBlackPawn7(position);
    this.chessService.moveChessBlackPawn8(position);
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
