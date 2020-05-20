import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Coord } from '../model/coord';

@Injectable()
export class GameService {

    knightPosition$ = new BehaviorSubject<Coord>({ x: 0, y: 0 });

    moveKnight(to: Coord) {
        this.knightPosition$.next(to);
    }

}
