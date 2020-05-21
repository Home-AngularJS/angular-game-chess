import { Component, Input  } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../core/model/chess-piece';
import { ChessService } from '../../core/service/chess.service';
import { Position } from '../../core/model/position';

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
    @Input() position: Position;
    get black() {
         const { x, y } = this.position;
         return (x + y) % 2 === 1;
    }

    // TODO: step 2
    target = this.dnd.dropTarget(ItemTypes.KNIGHT, {
      drop: monitor => {
          this.chessService.moveChessKnight(this.position);
      }
    });

    // TODO: step 1
    constructor(private dnd: SkyhookDndService, private chessService: ChessService) { }

    // TODO: step 4
    ngOnDestroy() {
        this.target.unsubscribe();
    }

}
