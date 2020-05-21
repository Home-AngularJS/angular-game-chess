import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Position } from '../model/position';

@Injectable()
export class ChessService {

  chessKingPosition$ = new BehaviorSubject<Position>({ x: 4, y: 0 });
  chessQueenPosition$ = new BehaviorSubject<Position>({ x: 3, y: 0 });
  chessBishopPosition1$ = new BehaviorSubject<Position>({ x: 2, y: 0 });
  chessBishopPosition2$ = new BehaviorSubject<Position>({ x: 5, y: 0 });
  chessKnightPosition1$ = new BehaviorSubject<Position>({ x: 1, y: 0 });
  chessKnightPosition2$ = new BehaviorSubject<Position>({ x: 6, y: 0 });
  chessRookPosition1$ = new BehaviorSubject<Position>({ x: 0, y: 0 });
  chessRookPosition2$ = new BehaviorSubject<Position>({ x: 7, y: 0 });
  chessPawnPosition1$ = new BehaviorSubject<Position>({ x: 0, y: 1 });
  chessPawnPosition2$ = new BehaviorSubject<Position>({ x: 1, y: 1 });
  chessPawnPosition3$ = new BehaviorSubject<Position>({ x: 2, y: 1 });
  chessPawnPosition4$ = new BehaviorSubject<Position>({ x: 3, y: 1 });
  chessPawnPosition5$ = new BehaviorSubject<Position>({ x: 4, y: 1 });
  chessPawnPosition6$ = new BehaviorSubject<Position>({ x: 5, y: 1 });
  chessPawnPosition7$ = new BehaviorSubject<Position>({ x: 6, y: 1 });
  chessPawnPosition8$ = new BehaviorSubject<Position>({ x: 7, y: 1 });

  moveChessKing(to: Position) {
    this.chessKingPosition$.next(to);
  }

  moveChessQueen(to: Position) {
    this.chessQueenPosition$.next(to);
  }

  moveChessBishop1(to: Position) {
    this.chessBishopPosition1$.next(to);
  }

  moveChessBishop2(to: Position) {
    this.chessBishopPosition2$.next(to);
  }

  moveChessKnight1(to: Position) {
    this.chessKnightPosition1$.next(to);
  }

  moveChessKnight2(to: Position) {
    this.chessKnightPosition2$.next(to);
  }

  moveChessRook1(to: Position) {
    this.chessRookPosition1$.next(to);
  }

  moveChessRook2(to: Position) {
    this.chessRookPosition2$.next(to);
  }

  moveChessPawn1(to: Position) {
    this.chessPawnPosition1$.next(to);
  }

  moveChessPawn2(to: Position) {
    this.chessPawnPosition2$.next(to);
  }

  moveChessPawn3(to: Position) {
    this.chessPawnPosition3$.next(to);
  }

  moveChessPawn4(to: Position) {
    this.chessPawnPosition4$.next(to);
  }

  moveChessPawn5(to: Position) {
    this.chessPawnPosition5$.next(to);
  }

  moveChessPawn6(to: Position) {
    this.chessPawnPosition6$.next(to);
  }

  moveChessPawn7(to: Position) {
    this.chessPawnPosition7$.next(to);
  }

  moveChessPawn8(to: Position) {
    this.chessPawnPosition8$.next(to);
  }

}
