import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-white-king',
  templateUrl: './chess-white-king.component.html',
  styleUrls: ['./chess-white-king.component.css']
})
export class ChessWhiteKingComponent implements OnInit {

  // TODO: step 2
  chessWhiteKingSource = this.dnd.dragSource(ItemTypes.KING, {
      beginDrag: () => ({})
  });

  // component (this is an Observable<boolean>)
  isDragging$ = this.chessWhiteKingSource.listen(monitor =>  monitor.isDragging());

  // TODO: step 1
  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  // TODO: step 4
  ngOnDestroy() {
    this.chessWhiteKingSource.unsubscribe();
  }

}
