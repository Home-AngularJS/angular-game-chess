import { Component, OnInit } from '@angular/core';
import { Position } from '../../../core/model/position';
import { ChessService } from '../../../core/service/chess.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  // TODO: чтобы сделать математику заполняем с 0 по 63
  sixtyFour = new Array(64)
    .fill(0)
    .map((_, i) => i)

  constructor(private chessService : ChessService) {
  }

  ngOnInit() {
  }

  position(pos): Position {
    console.log("position()")
    return {
        x: pos % 8,
        y: Math.floor(pos / 8)
    }
  }

  equalPosition(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
  }

  isBlackSquare({ x, y }: Position) {
    console.log(x + "," + y)
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
  }
}
