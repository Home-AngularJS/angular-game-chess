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
    console.log("position:")
    return {
        x: pos % 8,
        y: Math.floor(pos / 8)
    }
  }

  equalsPosition(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
  }

  isBlackSquare({ x, y }: Position) {
    console.log('X=' + x + ' Y=' + y)
    return (x + y) % 2 === 1
  }

  handleSquare(position: Position) {
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
    this.chessService.moveChessWhitePawn1(position);
    this.chessService.moveChessWhitePawn2(position);
    this.chessService.moveChessWhitePawn3(position);
    this.chessService.moveChessWhitePawn4(position);
    this.chessService.moveChessWhitePawn5(position);
    this.chessService.moveChessWhitePawn6(position);
    this.chessService.moveChessWhitePawn7(position);
    this.chessService.moveChessWhitePawn8(position);
    this.chessService.moveChessWhiteKing(position);
    this.chessService.moveChessWhiteQueen(position);
    this.chessService.moveChessWhiteBishop1(position);
    this.chessService.moveChessWhiteBishop2(position);
    this.chessService.moveChessWhiteKnight1(position);
    this.chessService.moveChessWhiteKnight2(position);
    this.chessService.moveChessWhiteRook1(position);
    this.chessService.moveChessWhiteRook2(position);
  }
}
