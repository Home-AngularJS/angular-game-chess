import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-king',
  templateUrl: './chess-king.component.html',
  styleUrls: ['./chess-king.component.css']
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
