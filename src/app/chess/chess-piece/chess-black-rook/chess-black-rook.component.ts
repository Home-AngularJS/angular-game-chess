import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-black-rook',
  templateUrl: './chess-black-rook.component.html',
  styleUrls: ['./chess-black-rook.component.css']
})
export class ChessBlackRookComponent implements OnInit {

  // TODO: step 2
  chessBlackRookSource = this.dnd.dragSource(ItemTypes.ROOK, {
      beginDrag: () => ({})
  });

  // component (this is an Observable<boolean>)
  isDragging$ = this.chessBlackRookSource.listen(monitor =>  monitor.isDragging());

  // TODO: step 1
  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  // TODO: step 4
  ngOnDestroy() {
    this.chessBlackRookSource.unsubscribe();
  }

}
