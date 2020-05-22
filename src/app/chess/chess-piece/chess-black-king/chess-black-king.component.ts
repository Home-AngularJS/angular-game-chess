import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-black-king',
  templateUrl: './chess-black-king.component.html',
  styleUrls: ['./chess-black-king.component.css']
})
export class ChessBlackKingComponent implements OnInit {

  // TODO: step 2
  chessBlackKingSource = this.dnd.dragSource(ItemTypes.KING, {
      beginDrag: () => ({})
  });

  // component (this is an Observable<boolean>)
  isDragging$ = this.chessBlackKingSource.listen(monitor =>  monitor.isDragging());

  // TODO: step 1
  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  // TODO: step 4
  ngOnDestroy() {
    this.chessBlackKingSource.unsubscribe();
  }

}
