import { Component, OnInit } from '@angular/core';
import { Position } from '../../core/model/position';
import { ChessService } from '../../core/service/chess.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  // TODO: чтобы сделать математику заполняем с 0 по 63
  sixtyFour = new Array(64)
    .fill(0)
    .map((_, i) => i);

  chessBlackKingPosition$ = this.chessService.chessBlackKingPosition$;
  chessBlackQueenPosition$ = this.chessService.chessBlackQueenPosition$;
  chessBlackBishop1Position$ = this.chessService.chessBlackBishop1Position$;
  chessBlackBishop2Position$ = this.chessService.chessBlackBishop2Position$;
  chessBlackKnight1Position$ = this.chessService.chessBlackKnight1Position$;
  chessBlackKnight2Position$ = this.chessService.chessBlackKnight2Position$;
  chessBlackRook1Position$ = this.chessService.chessBlackRook1Position$;
  chessBlackRook2Position$ = this.chessService.chessBlackRook2Position$;
  chessBlackPawn1Position$ = this.chessService.chessBlackPawn1Position$;
  chessBlackPawn2Position$ = this.chessService.chessBlackPawn2Position$;
  chessBlackPawn3Position$ = this.chessService.chessBlackPawn3Position$;
  chessBlackPawn4Position$ = this.chessService.chessBlackPawn4Position$;
  chessBlackPawn5Position$ = this.chessService.chessBlackPawn5Position$;
  chessBlackPawn6Position$ = this.chessService.chessBlackPawn6Position$;
  chessBlackPawn7Position$ = this.chessService.chessBlackPawn7Position$;
  chessBlackPawn8Position$ = this.chessService.chessBlackPawn8Position$;

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
      console.log(x + "," + y)
      return (x + y) % 2 === 1;
   }
}
