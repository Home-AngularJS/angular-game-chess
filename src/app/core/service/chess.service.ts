import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Position } from '../model/position';

@Injectable()
export class ChessService {
  chessBlackKingPosition$ = new BehaviorSubject<Position>({ x: 4, y: 0 })
  chessBlackQueenPosition$ = new BehaviorSubject<Position>({ x: 3, y: 0 })
  chessBlackBishop1Position$ = new BehaviorSubject<Position>({ x: 2, y: 0 })
  chessBlackBishop2Position$ = new BehaviorSubject<Position>({ x: 5, y: 0 })
  chessBlackKnight1Position$ = new BehaviorSubject<Position>({ x: 1, y: 0 })
  chessBlackKnight2Position$ = new BehaviorSubject<Position>({ x: 6, y: 0 })
  chessBlackRook1Position$ = new BehaviorSubject<Position>({ x: 0, y: 0 })
  chessBlackRook2Position$ = new BehaviorSubject<Position>({ x: 7, y: 0 })
  chessBlackPawn1Position$ = new BehaviorSubject<Position>({ x: 0, y: 1 })
  chessBlackPawn2Position$ = new BehaviorSubject<Position>({ x: 1, y: 1 })
  chessBlackPawn3Position$ = new BehaviorSubject<Position>({ x: 2, y: 1 })
  chessBlackPawn4Position$ = new BehaviorSubject<Position>({ x: 3, y: 1 })
  chessBlackPawn5Position$ = new BehaviorSubject<Position>({ x: 4, y: 1 })
  chessBlackPawn6Position$ = new BehaviorSubject<Position>({ x: 5, y: 1 })
  chessBlackPawn7Position$ = new BehaviorSubject<Position>({ x: 6, y: 1 })
  chessBlackPawn8Position$ = new BehaviorSubject<Position>({ x: 7, y: 1 })
  chessWhitePawn1Position$ = new BehaviorSubject<Position>({ x: 0, y: 6 })
  chessWhitePawn2Position$ = new BehaviorSubject<Position>({ x: 1, y: 6 })
  chessWhitePawn3Position$ = new BehaviorSubject<Position>({ x: 2, y: 6 })
  chessWhitePawn4Position$ = new BehaviorSubject<Position>({ x: 3, y: 6 })
  chessWhitePawn5Position$ = new BehaviorSubject<Position>({ x: 4, y: 6 })
  chessWhitePawn6Position$ = new BehaviorSubject<Position>({ x: 5, y: 6 })
  chessWhitePawn7Position$ = new BehaviorSubject<Position>({ x: 6, y: 6 })
  chessWhitePawn8Position$ = new BehaviorSubject<Position>({ x: 7, y: 6 })
  chessWhiteKingPosition$ = new BehaviorSubject<Position>({ x: 4, y: 7 })
  chessWhiteQueenPosition$ = new BehaviorSubject<Position>({ x: 3, y: 7 })
  chessWhiteBishop1Position$ = new BehaviorSubject<Position>({ x: 2, y: 7 })
  chessWhiteBishop2Position$ = new BehaviorSubject<Position>({ x: 5, y: 7 })
  chessWhiteKnight1Position$ = new BehaviorSubject<Position>({ x: 1, y: 7 })
  chessWhiteKnight2Position$ = new BehaviorSubject<Position>({ x: 6, y: 7 })
  chessWhiteRook1Position$ = new BehaviorSubject<Position>({ x: 0, y: 7 })
  chessWhiteRook2Position$ = new BehaviorSubject<Position>({ x: 7, y: 7 })
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
  chessStep = 0

  upChessStep() {
    this.chessStep++
  }

  downChessStep() {
    if (0 < this.chessStep) this.chessStep--
  }

  moveChessBlackKing(to: Position) {
    this.chessBlackKingPosition$.next(to)
    if (0 == this.chessStep) this.isChessBlackKingPosition = false
  }

  moveChessBlackQueen(to: Position) {
    this.chessBlackQueenPosition$.next(to)
    if (0 == this.chessStep) this.isChessBlackQueenPosition = false
  }

  moveChessBlackBishop1(to: Position) {
    this.chessBlackBishop1Position$.next(to)
    if (0 == this.chessStep) this.isChessBlackBishop1Position = false
  }

  moveChessBlackBishop2(to: Position) {
    this.chessBlackBishop2Position$.next(to)
    if (0 == this.chessStep) this.isChessBlackBishop2Position = false
  }

  moveChessBlackKnight1(to: Position) {
    this.chessBlackKnight1Position$.next(to)
    if (0 == this.chessStep) this.isChessBlackKnight1Position = false
  }

  moveChessBlackKnight2(to: Position) {
    this.chessBlackKnight2Position$.next(to)
    if (0 == this.chessStep) this.isChessBlackKnight2Position = false
  }

  moveChessBlackRook1(to: Position) {
    this.chessBlackRook1Position$.next(to)
    if (0 == this.chessStep) this.isChessBlackRook1Position = false
  }

  moveChessBlackRook2(to: Position) {
    this.chessBlackRook2Position$.next(to)
    if (0 == this.chessStep) this.isChessBlackRook2Position = false
  }

  moveChessBlackPawn1(to: Position) {
    this.chessBlackPawn1Position$.next(to)
    if (0 == this.chessStep) this.isChessBlackPawn1Position = false
  }

  moveChessBlackPawn2(to: Position) {
    this.chessBlackPawn2Position$.next(to)
    if (0 == this.chessStep) this.isChessBlackPawn2Position = false
  }

  moveChessBlackPawn3(to: Position) {
    this.chessBlackPawn3Position$.next(to)
    if (0 == this.chessStep) this.isChessBlackPawn3Position = false
  }

  moveChessBlackPawn4(to: Position) {
    this.chessBlackPawn4Position$.next(to)
    if (0 == this.chessStep) this.isChessBlackPawn4Position = false
  }

  moveChessBlackPawn5(to: Position) {
    this.chessBlackPawn5Position$.next(to)
    if (0 == this.chessStep) this.isChessBlackPawn5Position = false
  }

  moveChessBlackPawn6(to: Position) {
    this.chessBlackPawn6Position$.next(to)
    if (0 == this.chessStep) this.isChessBlackPawn6Position = false
  }

  moveChessBlackPawn7(to: Position) {
    this.chessBlackPawn7Position$.next(to)
    if (0 == this.chessStep) this.isChessBlackPawn7Position = false
  }

  moveChessBlackPawn8(to: Position) {
    this.chessBlackPawn8Position$.next(to)
    if (0 == this.chessStep) this.isChessBlackPawn8Position = false
  }

  moveChessWhitePawn1(to: Position) {
    this.chessWhitePawn1Position$.next(to)
    if (0 == this.chessStep) this.isChessWhitePawn1Position = false
  }

  moveChessWhitePawn2(to: Position) {
    this.chessWhitePawn2Position$.next(to)
    if (0 == this.chessStep) this.isChessWhitePawn2Position = false
  }

  moveChessWhitePawn3(to: Position) {
    this.chessWhitePawn3Position$.next(to)
    if (0 == this.chessStep) this.isChessWhitePawn3Position = false
  }

  moveChessWhitePawn4(to: Position) {
    this.chessWhitePawn4Position$.next(to)
    if (0 == this.chessStep) this.isChessWhitePawn4Position = false
  }

  moveChessWhitePawn5(to: Position) {
    this.chessWhitePawn5Position$.next(to)
    if (0 == this.chessStep) this.isChessWhitePawn5Position = false
  }

  moveChessWhitePawn6(to: Position) {
    this.chessWhitePawn6Position$.next(to)
    if (0 == this.chessStep) this.isChessWhitePawn6Position = false
  }

  moveChessWhitePawn7(to: Position) {
    this.chessWhitePawn7Position$.next(to)
    if (0 == this.chessStep) this.isChessWhitePawn7Position = false
  }

  moveChessWhitePawn8(to: Position) {
    this.chessWhitePawn8Position$.next(to)
    if (0 == this.chessStep) this.isChessWhitePawn8Position = false
  }

  moveChessWhiteKing(to: Position) {
    this.chessWhiteKingPosition$.next(to)
    if (0 == this.chessStep) this.isChessWhiteKingPosition = false
  }

  moveChessWhiteQueen(to: Position) {
    this.chessWhiteQueenPosition$.next(to)
    if (0 == this.chessStep) this.isChessWhiteQueenPosition = false
  }

  moveChessWhiteBishop1(to: Position) {
    this.chessWhiteBishop1Position$.next(to)
    if (0 == this.chessStep) this.isChessWhiteBishop1Position = false
  }

  moveChessWhiteBishop2(to: Position) {
    this.chessWhiteBishop2Position$.next(to)
    if (0 == this.chessStep) this.isChessWhiteBishop2Position = false
  }

  moveChessWhiteKnight1(to: Position) {
    this.chessWhiteKnight1Position$.next(to)
    if (0 == this.chessStep) this.isChessWhiteKnight1Position = false
  }

  moveChessWhiteKnight2(to: Position) {
    this.chessWhiteKnight2Position$.next(to)
    if (0 == this.chessStep) this.isChessWhiteKnight2Position = false
  }

  moveChessWhiteRook1(to: Position) {
    this.chessWhiteRook1Position$.next(to)
    if (0 == this.chessStep) this.isChessWhiteRook1Position = false
  }

  moveChessWhiteRook2(to: Position) {
    this.chessWhiteRook2Position$.next(to)
    if (0 == this.chessStep) this.isChessWhiteRook2Position = false
  }
}
