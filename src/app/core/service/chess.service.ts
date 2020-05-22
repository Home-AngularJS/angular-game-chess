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
  chessWhitePawn1Position$ = new BehaviorSubject<Position>({ x: 0, y: 6 });
  chessWhitePawn2Position$ = new BehaviorSubject<Position>({ x: 1, y: 6 });
  chessWhitePawn3Position$ = new BehaviorSubject<Position>({ x: 2, y: 6 });
  chessWhitePawn4Position$ = new BehaviorSubject<Position>({ x: 3, y: 6 });
  chessWhitePawn5Position$ = new BehaviorSubject<Position>({ x: 4, y: 6 });
  chessWhitePawn6Position$ = new BehaviorSubject<Position>({ x: 5, y: 6 });
  chessWhitePawn7Position$ = new BehaviorSubject<Position>({ x: 6, y: 6 });
  chessWhitePawn8Position$ = new BehaviorSubject<Position>({ x: 7, y: 6 });
  chessWhiteKingPosition$ = new BehaviorSubject<Position>({ x: 4, y: 7 });
  chessWhiteQueenPosition$ = new BehaviorSubject<Position>({ x: 3, y: 7 });
  chessWhiteBishop1Position$ = new BehaviorSubject<Position>({ x: 2, y: 7 });
  chessWhiteBishop2Position$ = new BehaviorSubject<Position>({ x: 5, y: 7 });
  chessWhiteKnight1Position$ = new BehaviorSubject<Position>({ x: 1, y: 7 });
  chessWhiteKnight2Position$ = new BehaviorSubject<Position>({ x: 6, y: 7 });
  chessWhiteRook1Position$ = new BehaviorSubject<Position>({ x: 0, y: 7 });
  chessWhiteRook2Position$ = new BehaviorSubject<Position>({ x: 7, y: 7 });

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

  moveChessWhitePawn1(to: Position) {
    this.chessWhitePawn1Position$.next(to);
  }

  moveChessWhitePawn2(to: Position) {
    this.chessWhitePawn2Position$.next(to);
  }

  moveChessWhitePawn3(to: Position) {
    this.chessWhitePawn3Position$.next(to);
  }

  moveChessWhitePawn4(to: Position) {
    this.chessWhitePawn4Position$.next(to);
  }

  moveChessWhitePawn5(to: Position) {
    this.chessWhitePawn5Position$.next(to);
  }

  moveChessWhitePawn6(to: Position) {
    this.chessWhitePawn6Position$.next(to);
  }

  moveChessWhitePawn7(to: Position) {
    this.chessWhitePawn7Position$.next(to);
  }

  moveChessWhitePawn8(to: Position) {
    this.chessWhitePawn8Position$.next(to);
  }

  moveChessWhiteKing(to: Position) {
    this.chessWhiteKingPosition$.next(to);
  }

  moveChessWhiteQueen(to: Position) {
    this.chessWhiteQueenPosition$.next(to);
  }

  moveChessWhiteBishop1(to: Position) {
    this.chessWhiteBishop1Position$.next(to);
  }

  moveChessWhiteBishop2(to: Position) {
    this.chessWhiteBishop2Position$.next(to);
  }

  moveChessWhiteKnight1(to: Position) {
    this.chessWhiteKnight1Position$.next(to);
  }

  moveChessWhiteKnight2(to: Position) {
    this.chessWhiteKnight2Position$.next(to);
  }

  moveChessWhiteRook1(to: Position) {
    this.chessWhiteRook1Position$.next(to);
  }

  moveChessWhiteRook2(to: Position) {
    this.chessWhiteRook2Position$.next(to);
  }
}
