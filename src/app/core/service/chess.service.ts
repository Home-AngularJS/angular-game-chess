import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Position } from '../model/position';

@Injectable()
export class ChessService {

  chessBlackKingPosition$ = new BehaviorSubject<Position>({ x: 4, y: 0 });
  chessBlackQueenPosition$ = new BehaviorSubject<Position>({ x: 3, y: 0 });
  chessBlackBishop1Position$ = new BehaviorSubject<Position>({ x: 2, y: 0 });
  chessBlackBishop2Position$ = new BehaviorSubject<Position>({ x: 5, y: 0 });
  chessBlackKnight1Position$ = new BehaviorSubject<Position>({ x: 1, y: 0 });
  chessBlackKnight2Position$ = new BehaviorSubject<Position>({ x: 6, y: 0 });
  chessBlackRook1Position$ = new BehaviorSubject<Position>({ x: 0, y: 0 });
  chessBlackRook2Position$ = new BehaviorSubject<Position>({ x: 7, y: 0 });
  chessBlackPawn1Position$ = new BehaviorSubject<Position>({ x: 0, y: 1 });
  chessBlackPawn2Position$ = new BehaviorSubject<Position>({ x: 1, y: 1 });
  chessBlackPawn3Position$ = new BehaviorSubject<Position>({ x: 2, y: 1 });
  chessBlackPawn4Position$ = new BehaviorSubject<Position>({ x: 3, y: 1 });
  chessBlackPawn5Position$ = new BehaviorSubject<Position>({ x: 4, y: 1 });
  chessBlackPawn6Position$ = new BehaviorSubject<Position>({ x: 5, y: 1 });
  chessBlackPawn7Position$ = new BehaviorSubject<Position>({ x: 6, y: 1 });
  chessBlackPawn8Position$ = new BehaviorSubject<Position>({ x: 7, y: 1 });

  moveChessBlackKing(to: Position) {
    this.chessBlackKingPosition$.next(to);
  }

  moveChessBlackQueen(to: Position) {
    this.chessBlackQueenPosition$.next(to);
  }

  moveChessBlackBishop1(to: Position) {
    this.chessBlackBishop1Position$.next(to);
  }

  moveChessBlackBishop2(to: Position) {
    this.chessBlackBishop2Position$.next(to);
  }

  moveChessBlackKnight1(to: Position) {
    this.chessBlackKnight1Position$.next(to);
  }

  moveChessBlackKnight2(to: Position) {
    this.chessBlackKnight2Position$.next(to);
  }

  moveChessBlackRook1(to: Position) {
    this.chessBlackRook1Position$.next(to);
  }

  moveChessBlackRook2(to: Position) {
    this.chessBlackRook2Position$.next(to);
  }

  moveChessBlackPawn1(to: Position) {
    this.chessBlackPawn1Position$.next(to);
  }

  moveChessBlackPawn2(to: Position) {
    this.chessBlackPawn2Position$.next(to);
  }

  moveChessBlackPawn3(to: Position) {
    this.chessBlackPawn3Position$.next(to);
  }

  moveChessBlackPawn4(to: Position) {
    this.chessBlackPawn4Position$.next(to);
  }

  moveChessBlackPawn5(to: Position) {
    this.chessBlackPawn5Position$.next(to);
  }

  moveChessBlackPawn6(to: Position) {
    this.chessBlackPawn6Position$.next(to);
  }

  moveChessBlackPawn7(to: Position) {
    this.chessBlackPawn7Position$.next(to);
  }

  moveChessBlackPawn8(to: Position) {
    this.chessBlackPawn8Position$.next(to);
  }

}
