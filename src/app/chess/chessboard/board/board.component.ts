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

  isChessBlackKingPosition = false
  isChessBlackQueenPosition = false
  isChessBlackBishop1Position = false
  isChessBlackBishop2Position = false
  isChessBlackKnight1Position = false
  isChessBlackKnight2Position = false
  isChessBlackRook1Position = false
  isChessBlackRook2Position = false
  isChessBlackPawn1Position = false
  isChessBlackPawn2Position = false
  isChessBlackPawn3Position = false
  isChessBlackPawn4Position = false
  isChessBlackPawn5Position = false
  isChessBlackPawn6Position = false
  isChessBlackPawn7Position = false
  isChessBlackPawn8Position = false
  isChessWhitePawn1Position = false
  isChessWhitePawn2Position = false
  isChessWhitePawn3Position = false
  isChessWhitePawn4Position = false
  isChessWhitePawn5Position = false
  isChessWhitePawn6Position = false
  isChessWhitePawn7Position = false
  isChessWhitePawn8Position = false
  isChessWhiteKingPosition = false
  isChessWhiteQueenPosition = false
  isChessWhiteBishop1Position = false
  isChessWhiteBishop2Position = false
  isChessWhiteKnight1Position = false
  isChessWhiteKnight2Position = false
  isChessWhiteRook1Position = false
  isChessWhiteRook2Position = false

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
    if (this.isChessBlackRook1Position) this.chessService.moveChessBlackRook1(position)
    if (this.isChessBlackKnight1Position) this.chessService.moveChessBlackKnight1(position)
    if (this.isChessBlackBishop1Position) this.chessService.moveChessBlackBishop1(position)
    if (this.isChessBlackQueenPosition) this.chessService.moveChessBlackQueen(position)
    if (this.isChessBlackKingPosition) this.chessService.moveChessBlackKing(position)
    if (this.isChessBlackBishop2Position) this.chessService.moveChessBlackBishop2(position)
    if (this.isChessBlackKnight2Position) this.chessService.moveChessBlackKnight2(position)
    if (this.isChessBlackRook2Position) this.chessService.moveChessBlackRook2(position)
    if (this.isChessBlackPawn1Position) this.chessService.moveChessBlackPawn1(position)
    if (this.isChessBlackPawn2Position) this.chessService.moveChessBlackPawn2(position)
    if (this.isChessBlackPawn3Position) this.chessService.moveChessBlackPawn3(position)
    if (this.isChessBlackPawn4Position) this.chessService.moveChessBlackPawn4(position)
    if (this.isChessBlackPawn5Position) this.chessService.moveChessBlackPawn5(position)
    if (this.isChessBlackPawn6Position) this.chessService.moveChessBlackPawn6(position)
    if (this.isChessBlackPawn7Position) this.chessService.moveChessBlackPawn7(position)
    if (this.isChessBlackPawn8Position) this.chessService.moveChessBlackPawn8(position)
    if (this.isChessWhitePawn1Position) this.chessService.moveChessWhitePawn1(position)
    if (this.isChessWhitePawn2Position) this.chessService.moveChessWhitePawn2(position)
    if (this.isChessWhitePawn3Position) this.chessService.moveChessWhitePawn3(position)
    if (this.isChessWhitePawn4Position) this.chessService.moveChessWhitePawn4(position)
    if (this.isChessWhitePawn5Position) this.chessService.moveChessWhitePawn5(position)
    if (this.isChessWhitePawn6Position) this.chessService.moveChessWhitePawn6(position)
    if (this.isChessWhitePawn7Position) this.chessService.moveChessWhitePawn7(position)
    if (this.isChessWhitePawn8Position) this.chessService.moveChessWhitePawn8(position)
    if (this.isChessWhiteRook1Position) this.chessService.moveChessWhiteRook1(position)
    if (this.isChessWhiteKnight1Position) this.chessService.moveChessWhiteKnight1(position)
    if (this.isChessWhiteBishop1Position) this.chessService.moveChessWhiteBishop1(position)
    if (this.isChessWhiteQueenPosition) this.chessService.moveChessWhiteQueen(position)
    if (this.isChessWhiteKingPosition) this.chessService.moveChessWhiteKing(position)
    if (this.isChessWhiteBishop2Position) this.chessService.moveChessWhiteBishop2(position)
    if (this.isChessWhiteKnight2Position) this.chessService.moveChessWhiteKnight2(position)
    if (this.isChessWhiteRook2Position) this.chessService.moveChessWhiteRook2(position)
  }

  handleChess(position: Position) {
    this.isChessBlackKingPosition = this.equalsPosition(position, this.chessService.chessBlackKingPosition$.value)
    this.isChessBlackQueenPosition = this.equalsPosition(position, this.chessService.chessBlackQueenPosition$.value)
    this.isChessBlackBishop1Position = this.equalsPosition(position, this.chessService.chessBlackBishop1Position$.value)
    this.isChessBlackBishop2Position = this.equalsPosition(position, this.chessService.chessBlackBishop2Position$.value)
    this.isChessBlackKnight1Position = this.equalsPosition(position, this.chessService.chessBlackKnight1Position$.value)
    this.isChessBlackKnight2Position = this.equalsPosition(position, this.chessService.chessBlackKnight2Position$.value)
    this.isChessBlackRook1Position = this.equalsPosition(position, this.chessService.chessBlackRook1Position$.value)
    this.isChessBlackRook2Position = this.equalsPosition(position, this.chessService.chessBlackRook2Position$.value)
    this.isChessBlackPawn1Position = this.equalsPosition(position, this.chessService.chessBlackPawn1Position$.value)
    this.isChessBlackPawn2Position = this.equalsPosition(position, this.chessService.chessBlackPawn2Position$.value)
    this.isChessBlackPawn3Position = this.equalsPosition(position, this.chessService.chessBlackPawn3Position$.value)
    this.isChessBlackPawn4Position = this.equalsPosition(position, this.chessService.chessBlackPawn4Position$.value)
    this.isChessBlackPawn5Position = this.equalsPosition(position, this.chessService.chessBlackPawn5Position$.value)
    this.isChessBlackPawn6Position = this.equalsPosition(position, this.chessService.chessBlackPawn6Position$.value)
    this.isChessBlackPawn7Position = this.equalsPosition(position, this.chessService.chessBlackPawn7Position$.value)
    this.isChessBlackPawn8Position = this.equalsPosition(position, this.chessService.chessBlackPawn8Position$.value)
    this.isChessWhitePawn1Position = this.equalsPosition(position, this.chessService.chessWhitePawn1Position$.value)
    this.isChessWhitePawn2Position = this.equalsPosition(position, this.chessService.chessWhitePawn2Position$.value)
    this.isChessWhitePawn3Position = this.equalsPosition(position, this.chessService.chessWhitePawn3Position$.value)
    this.isChessWhitePawn4Position = this.equalsPosition(position, this.chessService.chessWhitePawn4Position$.value)
    this.isChessWhitePawn5Position = this.equalsPosition(position, this.chessService.chessWhitePawn5Position$.value)
    this.isChessWhitePawn6Position = this.equalsPosition(position, this.chessService.chessWhitePawn6Position$.value)
    this.isChessWhitePawn7Position = this.equalsPosition(position, this.chessService.chessWhitePawn7Position$.value)
    this.isChessWhitePawn8Position = this.equalsPosition(position, this.chessService.chessWhitePawn8Position$.value)
    this.isChessWhiteKingPosition = this.equalsPosition(position, this.chessService.chessWhiteKingPosition$.value)
    this.isChessWhiteQueenPosition = this.equalsPosition(position, this.chessService.chessWhiteQueenPosition$.value)
    this.isChessWhiteBishop1Position = this.equalsPosition(position, this.chessService.chessWhiteBishop1Position$.value)
    this.isChessWhiteBishop2Position = this.equalsPosition(position, this.chessService.chessWhiteBishop2Position$.value)
    this.isChessWhiteKnight1Position = this.equalsPosition(position, this.chessService.chessWhiteKnight1Position$.value)
    this.isChessWhiteKnight2Position = this.equalsPosition(position, this.chessService.chessWhiteKnight2Position$.value)
    this.isChessWhiteRook1Position = this.equalsPosition(position, this.chessService.chessWhiteRook1Position$.value)
    this.isChessWhiteRook2Position = this.equalsPosition(position, this.chessService.chessWhiteRook2Position$.value)
  }
}
