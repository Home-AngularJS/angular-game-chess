import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Coord } from '../model/coord';

@Injectable()
export class ChessService {

  chessKingPosition$ = new BehaviorSubject<Coord>({ x: 4, y: 0 }); // TODO   x: 4, y: 0
  chessQueenPosition$ = new BehaviorSubject<Coord>({ x: 3, y: 0 }); // TODO   x: 3, y: 0
  chessBishopPosition$ = new BehaviorSubject<Coord>({ x: 2, y: 0 }); // TODO   x: 2, y: 0   x: 5, y: 0
  chessKnightPosition$ = new BehaviorSubject<Coord>({ x: 1, y: 0 }); // TODO   x: 1, y: 0   x: 6, y: 0
  chessPawnPosition$ = new BehaviorSubject<Coord>({ x: 0, y: 1 });// TODO   x: 0, y: 1   x: 1, y: 1   x: 2, y: 1   x: 3, y: 1   x: 4, y: 1   x: 5, y: 1   x: 6, y: 1   x: 7, y: 1
  chessRookPosition$ = new BehaviorSubject<Coord>({ x: 0, y: 0 }); // TODO   x: 0, y: 0   x: 7, y: 0

  moveChessKing(to: Coord) {
    this.chessKingPosition$.next(to);
  }

  moveChessQueen(to: Coord) {
    this.chessQueenPosition$.next(to);
  }

  moveChessBishop(to: Coord) {
    this.chessBishopPosition$.next(to);
  }

  moveChessKnight(to: Coord) {
    this.chessKnightPosition$.next(to);
  }

  moveChessPawn(to: Coord) {
    this.chessPawnPosition$.next(to);
  }

  moveChessRook(to: Coord) {
    this.chessRookPosition$.next(to);
  }

}
