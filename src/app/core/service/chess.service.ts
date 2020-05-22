import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Position } from '../model/position';

@Injectable()
export class ChessService {

  chessBlackKingPosition$ = new BehaviorSubject<Position>({ x: 4, y: 0 });
  chessBlackQueenPosition$ = new BehaviorSubject<Position>({ x: 3, y: 0 });
  chessBlackBishopPosition1$ = new BehaviorSubject<Position>({ x: 2, y: 0 });
  chessBlackBishopPosition2$ = new BehaviorSubject<Position>({ x: 5, y: 0 });
  chessBlackKnightPosition1$ = new BehaviorSubject<Position>({ x: 1, y: 0 });
  chessBlackKnightPosition2$ = new BehaviorSubject<Position>({ x: 6, y: 0 });
  chessBlackRookPosition1$ = new BehaviorSubject<Position>({ x: 0, y: 0 });
  chessBlackRookPosition2$ = new BehaviorSubject<Position>({ x: 7, y: 0 });
  chessBlackPawnPosition1$ = new BehaviorSubject<Position>({ x: 0, y: 1 });
  chessBlackPawnPosition2$ = new BehaviorSubject<Position>({ x: 1, y: 1 });
  chessBlackPawnPosition3$ = new BehaviorSubject<Position>({ x: 2, y: 1 });
  chessBlackPawnPosition4$ = new BehaviorSubject<Position>({ x: 3, y: 1 });
  chessBlackPawnPosition5$ = new BehaviorSubject<Position>({ x: 4, y: 1 });
  chessBlackPawnPosition6$ = new BehaviorSubject<Position>({ x: 5, y: 1 });
  chessBlackPawnPosition7$ = new BehaviorSubject<Position>({ x: 6, y: 1 });
  chessBlackPawnPosition8$ = new BehaviorSubject<Position>({ x: 7, y: 1 });

  moveChessBlackKing(to: Position) {
    this.chessBlackKingPosition$.next(to);
  }

  moveChessBlackQueen(to: Position) {
    this.chessBlackQueenPosition$.next(to);
  }

  moveChessBlackBishop1(to: Position) {
    this.chessBlackBishopPosition1$.next(to);
  }

  moveChessBlackBishop2(to: Position) {
    this.chessBlackBishopPosition2$.next(to);
  }

  moveChessBlackKnight1(to: Position) {
    this.chessBlackKnightPosition1$.next(to);
  }

  moveChessBlackKnight2(to: Position) {
    this.chessBlackKnightPosition2$.next(to);
  }

  moveChessBlackRook1(to: Position) {
    this.chessBlackRookPosition1$.next(to);
  }

  moveChessBlackRook2(to: Position) {
    this.chessBlackRookPosition2$.next(to);
  }

  moveChessBlackPawn1(to: Position) {
    this.chessBlackPawnPosition1$.next(to);
  }

  moveChessBlackPawn2(to: Position) {
    this.chessBlackPawnPosition2$.next(to);
  }

  moveChessBlackPawn3(to: Position) {
    this.chessBlackPawnPosition3$.next(to);
  }

  moveChessBlackPawn4(to: Position) {
    this.chessBlackPawnPosition4$.next(to);
  }

  moveChessBlackPawn5(to: Position) {
    this.chessBlackPawnPosition5$.next(to);
  }

  moveChessBlackPawn6(to: Position) {
    this.chessBlackPawnPosition6$.next(to);
  }

  moveChessBlackPawn7(to: Position) {
    this.chessBlackPawnPosition7$.next(to);
  }

  moveChessBlackPawn8(to: Position) {
    this.chessBlackPawnPosition8$.next(to);
  }

}
