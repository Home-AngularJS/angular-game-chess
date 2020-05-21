import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Position } from '../model/position';

@Injectable()
export class ChessService {

  chessKingPosition$ = new BehaviorSubject<Position>({ x: 4, y: 0 }); // TODO   x: 4, y: 0
  chessQueenPosition$ = new BehaviorSubject<Position>({ x: 3, y: 0 }); // TODO   x: 3, y: 0
  chessBishopPosition$ = new BehaviorSubject<Position>({ x: 2, y: 0 }); // TODO   x: 2, y: 0   x: 5, y: 0
  chessKnightPosition1$ = new BehaviorSubject<Position>({ x: 1, y: 0 }); // TODO   x: 1, y: 0
  chessKnightPosition2$ = new BehaviorSubject<Position>({ x: 6, y: 0 }); // TODO   x: 6, y: 0
  chessPawnPosition$ = new BehaviorSubject<Position>({ x: 0, y: 1 });// TODO   x: 0, y: 1   x: 1, y: 1   x: 2, y: 1   x: 3, y: 1   x: 4, y: 1   x: 5, y: 1   x: 6, y: 1   x: 7, y: 1
  chessRookPosition$ = new BehaviorSubject<Position>({ x: 0, y: 0 }); // TODO   x: 0, y: 0   x: 7, y: 0

  moveChessKing(to: Position) {
    this.chessKingPosition$.next(to);
  }

  moveChessQueen(to: Position) {
    this.chessQueenPosition$.next(to);
  }

  moveChessBishop(to: Position) {
    this.chessBishopPosition$.next(to);
  }

  moveChessKnight1(to: Position) {
    this.chessKnightPosition1$.next(to);
  }

  moveChessKnight2(to: Position) {
    this.chessKnightPosition2$.next(to);
  }

  moveChessPawn(to: Position) {
    this.chessPawnPosition$.next(to);
  }

  moveChessRook(to: Position) {
    this.chessRookPosition$.next(to);
  }

}
