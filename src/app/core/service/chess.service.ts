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
  chessStep = 0
  isChessBlackKingPosition: boolean
  isChessBlackQueenPosition: boolean
  isChessBlackBishop1Position: boolean
  isChessBlackBishop2Position: boolean
  isChessBlackKnight1Position: boolean
  isChessBlackKnight2Position: boolean
  isChessBlackRook1Position: boolean
  isChessBlackRook2Position: boolean
  isChessBlackPawn1Position: boolean
  isChessBlackPawn2Position: boolean
  isChessBlackPawn3Position: boolean
  isChessBlackPawn4Position: boolean
  isChessBlackPawn5Position: boolean
  isChessBlackPawn6Position: boolean
  isChessBlackPawn7Position: boolean
  isChessBlackPawn8Position: boolean
  isChessWhitePawn1Position: boolean
  isChessWhitePawn2Position: boolean
  isChessWhitePawn3Position: boolean
  isChessWhitePawn4Position: boolean
  isChessWhitePawn5Position: boolean
  isChessWhitePawn6Position: boolean
  isChessWhitePawn7Position: boolean
  isChessWhitePawn8Position: boolean
  isChessWhiteKingPosition: boolean
  isChessWhiteQueenPosition: boolean
  isChessWhiteBishop1Position: boolean
  isChessWhiteBishop2Position: boolean
  isChessWhiteKnight1Position: boolean
  isChessWhiteKnight2Position: boolean
  isChessWhiteRook1Position: boolean
  isChessWhiteRook2Position: boolean

  upChessStep() {
    this.chessStep++
  }

  downChessStep() {
    if (0 < this.chessStep) this.chessStep--
  }

  setChessPositionFalse() {
    this.isChessBlackKingPosition = false
    this.isChessBlackQueenPosition = false
    this.isChessBlackBishop1Position = false
    this.isChessBlackBishop2Position = false
    this.isChessBlackKnight1Position = false
    this.isChessBlackKnight2Position = false
    this.isChessBlackRook1Position = false
    this.isChessBlackRook2Position = false
    this.isChessBlackPawn1Position = false
    this.isChessBlackPawn2Position = false
    this.isChessBlackPawn3Position = false
    this.isChessBlackPawn4Position = false
    this.isChessBlackPawn5Position = false
    this.isChessBlackPawn6Position = false
    this.isChessBlackPawn7Position = false
    this.isChessBlackPawn8Position = false
    this.isChessWhitePawn1Position = false
    this.isChessWhitePawn2Position = false
    this.isChessWhitePawn3Position = false
    this.isChessWhitePawn4Position = false
    this.isChessWhitePawn5Position = false
    this.isChessWhitePawn6Position = false
    this.isChessWhitePawn7Position = false
    this.isChessWhitePawn8Position = false
    this.isChessWhiteKingPosition = false
    this.isChessWhiteQueenPosition = false
    this.isChessWhiteBishop1Position = false
    this.isChessWhiteBishop2Position = false
    this.isChessWhiteKnight1Position = false
    this.isChessWhiteKnight2Position = false
    this.isChessWhiteRook1Position = false
    this.isChessWhiteRook2Position = false
  }

  moveChessBlackKing(to: Position) {
    this.chessBlackKingPosition$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessBlackQueen(to: Position) {
    this.chessBlackQueenPosition$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessBlackBishop1(to: Position) {
    this.chessBlackBishop1Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessBlackBishop2(to: Position) {
    this.chessBlackBishop2Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessBlackKnight1(to: Position) {
    this.chessBlackKnight1Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessBlackKnight2(to: Position) {
    this.chessBlackKnight2Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessBlackRook1(to: Position) {
    this.chessBlackRook1Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessBlackRook2(to: Position) {
    this.chessBlackRook2Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessBlackPawn1(to: Position) {
    this.chessBlackPawn1Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessBlackPawn2(to: Position) {
    this.chessBlackPawn2Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessBlackPawn3(to: Position) {
    this.chessBlackPawn3Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessBlackPawn4(to: Position) {
    this.chessBlackPawn4Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessBlackPawn5(to: Position) {
    this.chessBlackPawn5Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessBlackPawn6(to: Position) {
    this.chessBlackPawn6Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessBlackPawn7(to: Position) {
    this.chessBlackPawn7Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessBlackPawn8(to: Position) {
    this.chessBlackPawn8Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessWhitePawn1(to: Position) {
    this.chessWhitePawn1Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessWhitePawn2(to: Position) {
    this.chessWhitePawn2Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessWhitePawn3(to: Position) {
    this.chessWhitePawn3Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessWhitePawn4(to: Position) {
    this.chessWhitePawn4Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessWhitePawn5(to: Position) {
    this.chessWhitePawn5Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessWhitePawn6(to: Position) {
    this.chessWhitePawn6Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessWhitePawn7(to: Position) {
    this.chessWhitePawn7Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessWhitePawn8(to: Position) {
    this.chessWhitePawn8Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessWhiteKing(to: Position) {
    this.chessWhiteKingPosition$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessWhiteQueen(to: Position) {
    this.chessWhiteQueenPosition$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessWhiteBishop1(to: Position) {
    this.chessWhiteBishop1Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessWhiteBishop2(to: Position) {
    this.chessWhiteBishop2Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessWhiteKnight1(to: Position) {
    this.chessWhiteKnight1Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessWhiteKnight2(to: Position) {
    this.chessWhiteKnight2Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessWhiteRook1(to: Position) {
    this.chessWhiteRook1Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }

  moveChessWhiteRook2(to: Position) {
    this.chessWhiteRook2Position$.next(to)
    if (0 == this.chessStep) this.setChessPositionFalse()
  }
}
