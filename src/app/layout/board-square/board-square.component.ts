import { Component, Input  } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../core/model/chess-piece';
import { GameService } from '../../core/service/game.service';
import { Coord } from '../../core/model/coord';

@Component({
    selector: 'app-board-square',
    template: `
    <!-- step 3 -->
    <div class="wrapper" [dropTarget]="target">
        <app-square [black]="black">
            <ng-content></ng-content>
        </app-square>
    </div>
    `, styles: [`
    :host, .wrapper {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
    }
    `]
})
export class BoardSquareComponent {
    @Input() position: Coord;
    get black() {
         const { x, y } = this.position;
         return (x + y) % 2 === 1;
    }

    // TODO: step 2
    target = this.dnd.dropTarget(ItemTypes.KNIGHT, {
      drop: monitor => {
          this.game.moveKnight(this.position);
      }
    });

    // TODO: step 1
    constructor(private dnd: SkyhookDndService, private game: GameService) { }

    // TODO: step 4
    ngOnDestroy() {
        this.target.unsubscribe();
    }

}
