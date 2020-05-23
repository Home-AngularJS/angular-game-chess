import { Component, OnInit } from '@angular/core';
import { Position } from '../../../core/model/position';
import { ChessService } from '../../../core/service/chess.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  sixtyFour = new Array(64)
    .fill(0)
    .map((_, i) => i)

  constructor(private chessService : ChessService) {
  }

  ngOnInit() {
  }

  position(pos): Position {
    // console.log("position:")
    return {
        x: pos % 8,
        y: Math.floor(pos / 8)
    }
  }

  equalsPosition(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
  }

  isBlackSquare({ x, y }: Position) {
    // console.log('X=' + x + ' Y=' + y)
    return (x + y) % 2 === 1
  }

  handleSquare(position: Position) {
    if (this.chessService.isChessBlackRook1Position) this.chessService.moveChessBlackRook1(position)
    if (this.chessService.isChessBlackKnight1Position) this.chessService.moveChessBlackKnight1(position)
    if (this.chessService.isChessBlackBishop1Position) this.chessService.moveChessBlackBishop1(position)
    if (this.chessService.isChessBlackQueenPosition) this.chessService.moveChessBlackQueen(position)
    if (this.chessService.isChessBlackKingPosition) this.chessService.moveChessBlackKing(position)
    if (this.chessService.isChessBlackBishop2Position) this.chessService.moveChessBlackBishop2(position)
    if (this.chessService.isChessBlackKnight2Position) this.chessService.moveChessBlackKnight2(position)
    if (this.chessService.isChessBlackRook2Position) this.chessService.moveChessBlackRook2(position)
    if (this.chessService.isChessBlackPawn1Position) this.chessService.moveChessBlackPawn1(position)
    if (this.chessService.isChessBlackPawn2Position) this.chessService.moveChessBlackPawn2(position)
    if (this.chessService.isChessBlackPawn3Position) this.chessService.moveChessBlackPawn3(position)
    if (this.chessService.isChessBlackPawn4Position) this.chessService.moveChessBlackPawn4(position)
    if (this.chessService.isChessBlackPawn5Position) this.chessService.moveChessBlackPawn5(position)
    if (this.chessService.isChessBlackPawn6Position) this.chessService.moveChessBlackPawn6(position)
    if (this.chessService.isChessBlackPawn7Position) this.chessService.moveChessBlackPawn7(position)
    if (this.chessService.isChessBlackPawn8Position) this.chessService.moveChessBlackPawn8(position)
    if (this.chessService.isChessWhitePawn1Position) this.chessService.moveChessWhitePawn1(position)
    if (this.chessService.isChessWhitePawn2Position) this.chessService.moveChessWhitePawn2(position)
    if (this.chessService.isChessWhitePawn3Position) this.chessService.moveChessWhitePawn3(position)
    if (this.chessService.isChessWhitePawn4Position) this.chessService.moveChessWhitePawn4(position)
    if (this.chessService.isChessWhitePawn5Position) this.chessService.moveChessWhitePawn5(position)
    if (this.chessService.isChessWhitePawn6Position) this.chessService.moveChessWhitePawn6(position)
    if (this.chessService.isChessWhitePawn7Position) this.chessService.moveChessWhitePawn7(position)
    if (this.chessService.isChessWhitePawn8Position) this.chessService.moveChessWhitePawn8(position)
    if (this.chessService.isChessWhiteRook1Position) this.chessService.moveChessWhiteRook1(position)
    if (this.chessService.isChessWhiteKnight1Position) this.chessService.moveChessWhiteKnight1(position)
    if (this.chessService.isChessWhiteBishop1Position) this.chessService.moveChessWhiteBishop1(position)
    if (this.chessService.isChessWhiteQueenPosition) this.chessService.moveChessWhiteQueen(position)
    if (this.chessService.isChessWhiteKingPosition) this.chessService.moveChessWhiteKing(position)
    if (this.chessService.isChessWhiteBishop2Position) this.chessService.moveChessWhiteBishop2(position)
    if (this.chessService.isChessWhiteKnight2Position) this.chessService.moveChessWhiteKnight2(position)
    if (this.chessService.isChessWhiteRook2Position) this.chessService.moveChessWhiteRook2(position)
    this.chessService.downChessStep()
  }

  handleChess(position: Position) {
    this.chessService.isChessBlackKingPosition = this.equalsPosition(position, this.chessService.chessBlackKingPosition$.value)
    this.chessService.isChessBlackQueenPosition = this.equalsPosition(position, this.chessService.chessBlackQueenPosition$.value)
    this.chessService.isChessBlackBishop1Position = this.equalsPosition(position, this.chessService.chessBlackBishop1Position$.value)
    this.chessService.isChessBlackBishop2Position = this.equalsPosition(position, this.chessService.chessBlackBishop2Position$.value)
    this.chessService.isChessBlackKnight1Position = this.equalsPosition(position, this.chessService.chessBlackKnight1Position$.value)
    this.chessService.isChessBlackKnight2Position = this.equalsPosition(position, this.chessService.chessBlackKnight2Position$.value)
    this.chessService.isChessBlackRook1Position = this.equalsPosition(position, this.chessService.chessBlackRook1Position$.value)
    this.chessService.isChessBlackRook2Position = this.equalsPosition(position, this.chessService.chessBlackRook2Position$.value)
    this.chessService.isChessBlackPawn1Position = this.equalsPosition(position, this.chessService.chessBlackPawn1Position$.value)
    this.chessService.isChessBlackPawn2Position = this.equalsPosition(position, this.chessService.chessBlackPawn2Position$.value)
    this.chessService.isChessBlackPawn3Position = this.equalsPosition(position, this.chessService.chessBlackPawn3Position$.value)
    this.chessService.isChessBlackPawn4Position = this.equalsPosition(position, this.chessService.chessBlackPawn4Position$.value)
    this.chessService.isChessBlackPawn5Position = this.equalsPosition(position, this.chessService.chessBlackPawn5Position$.value)
    this.chessService.isChessBlackPawn6Position = this.equalsPosition(position, this.chessService.chessBlackPawn6Position$.value)
    this.chessService.isChessBlackPawn7Position = this.equalsPosition(position, this.chessService.chessBlackPawn7Position$.value)
    this.chessService.isChessBlackPawn8Position = this.equalsPosition(position, this.chessService.chessBlackPawn8Position$.value)
    this.chessService.isChessWhitePawn1Position = this.equalsPosition(position, this.chessService.chessWhitePawn1Position$.value)
    this.chessService.isChessWhitePawn2Position = this.equalsPosition(position, this.chessService.chessWhitePawn2Position$.value)
    this.chessService.isChessWhitePawn3Position = this.equalsPosition(position, this.chessService.chessWhitePawn3Position$.value)
    this.chessService.isChessWhitePawn4Position = this.equalsPosition(position, this.chessService.chessWhitePawn4Position$.value)
    this.chessService.isChessWhitePawn5Position = this.equalsPosition(position, this.chessService.chessWhitePawn5Position$.value)
    this.chessService.isChessWhitePawn6Position = this.equalsPosition(position, this.chessService.chessWhitePawn6Position$.value)
    this.chessService.isChessWhitePawn7Position = this.equalsPosition(position, this.chessService.chessWhitePawn7Position$.value)
    this.chessService.isChessWhitePawn8Position = this.equalsPosition(position, this.chessService.chessWhitePawn8Position$.value)
    this.chessService.isChessWhiteKingPosition = this.equalsPosition(position, this.chessService.chessWhiteKingPosition$.value)
    this.chessService.isChessWhiteQueenPosition = this.equalsPosition(position, this.chessService.chessWhiteQueenPosition$.value)
    this.chessService.isChessWhiteBishop1Position = this.equalsPosition(position, this.chessService.chessWhiteBishop1Position$.value)
    this.chessService.isChessWhiteBishop2Position = this.equalsPosition(position, this.chessService.chessWhiteBishop2Position$.value)
    this.chessService.isChessWhiteKnight1Position = this.equalsPosition(position, this.chessService.chessWhiteKnight1Position$.value)
    this.chessService.isChessWhiteKnight2Position = this.equalsPosition(position, this.chessService.chessWhiteKnight2Position$.value)
    this.chessService.isChessWhiteRook1Position = this.equalsPosition(position, this.chessService.chessWhiteRook1Position$.value)
    this.chessService.isChessWhiteRook2Position = this.equalsPosition(position, this.chessService.chessWhiteRook2Position$.value)
    this.chessService.upChessStep()
  }
}
