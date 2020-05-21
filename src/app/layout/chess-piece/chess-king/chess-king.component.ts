import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-king',
  template: `<span [class.dragging]="isDragging$|async">♚</span>`,
  styles: [`
    span {
        font-weight: 400;
        font-size: 54px;
        line-height: 70px;
    }
    .dragging {
        opacity: 0.25;
        color : red;
    }
    `]
})
export class ChessKingComponent implements OnInit {

  // TODO: step 2
  chessKingSource = this.dnd.dragSource(ItemTypes.KING, {
      beginDrag: () => ({})
  });

  // component (this is an Observable<boolean>)
  isDragging$ = this.chessKingSource.listen(monitor =>  monitor.isDragging());

  // TODO: step 1
  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  // TODO: step 4
  ngOnDestroy() {
    this.chessKingSource.unsubscribe();
  }

}
