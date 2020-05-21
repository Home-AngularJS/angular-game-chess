import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Coord } from '../model/coord';

@Injectable()
export class GameService {

  kingPosition$ = new BehaviorSubject<Coord>({ x: 4, y: 0 }); // TODO   x: 4, y: 0
  queenPosition$ = new BehaviorSubject<Coord>({ x: 3, y: 0 }); // TODO   x: 3, y: 0
  bishopPosition$ = new BehaviorSubject<Coord>({ x: 2, y: 0 }); // TODO   x: 2, y: 0   x: 5, y: 0
  knightPosition$ = new BehaviorSubject<Coord>({ x: 1, y: 0 }); // TODO   x: 1, y: 0   x: 6, y: 0
  pawnPosition$ = new BehaviorSubject<Coord>({ x: 0, y: 1 });// TODO   x: 0, y: 1   x: 1, y: 1   x: 2, y: 1   x: 3, y: 1   x: 4, y: 1   x: 5, y: 1   x: 6, y: 1   x: 7, y: 1
  rookPosition$ = new BehaviorSubject<Coord>({ x: 0, y: 0 }); // TODO   x: 0, y: 0   x: 7, y: 0

  moveKing(to: Coord) {
    this.kingPosition$.next(to);
  }

  moveQueen(to: Coord) {
    this.queenPosition$.next(to);
  }

  moveBishop(to: Coord) {
    this.bishopPosition$.next(to);
  }

  moveKnight(to: Coord) {
    this.knightPosition$.next(to);
  }

  movePawn(to: Coord) {
    this.pawnPosition$.next(to);
  }

  moveRook(to: Coord) {
    this.rookPosition$.next(to);
  }

}
