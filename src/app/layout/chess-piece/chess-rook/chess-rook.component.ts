import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-rook',
  template: `<span [class.dragging]="isDragging$|async">♜</span>`,
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
export class ChessRookComponent implements OnInit {

  // TODO: step 2
  chessRookSource = this.dnd.dragSource(ItemTypes.ROOK, {
      beginDrag: () => ({})
  });

  // component (this is an Observable<boolean>)
  isDragging$ = this.chessRookSource.listen(monitor =>  monitor.isDragging());

  // TODO: step 1
  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  // TODO: step 4
  ngOnDestroy() {
    this.chessRookSource.unsubscribe();
  }

}
