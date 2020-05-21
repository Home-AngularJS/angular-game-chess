import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-knight',
  template: `<span [class.dragging]="isDragging$|async">♞</span>`,
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
export class KnightComponent implements OnInit {

  // TODO: step 2
  knightSource = this.dnd.dragSource(ItemTypes.KNIGHT, {
      beginDrag: () => ({})
  });

  // component (this is an Observable<boolean>)
  isDragging$ = this.knightSource.listen(monitor =>  monitor.isDragging());

  // TODO: step 1
  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  // TODO: step 4
  ngOnDestroy() {
    this.knightSource.unsubscribe();
  }

}
