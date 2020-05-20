import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Coord } from './coord';

@Injectable()
export class GameService {

    knightPosition$ = new BehaviorSubject<Coord>({ x: 2, y: 5 });

    moveKnight(to: Coord) {
        this.knightPosition$.next(to);
    }

}