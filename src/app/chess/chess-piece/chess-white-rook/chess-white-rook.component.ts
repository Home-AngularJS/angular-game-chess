import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-white-rook',
  templateUrl: './chess-white-rook.component.html',
  styleUrls: ['./chess-white-rook.component.css']
})
export class ChessWhiteRookComponent implements OnInit {

  // TODO: step 2
  chessWhiteRookSource = this.dnd.dragSource(ItemTypes.ROOK, {
      beginDrag: () => ({})
  });

  // component (this is an Observable<boolean>)
  isDragging$ = this.chessWhiteRookSource.listen(monitor =>  monitor.isDragging());

  // TODO: step 1
  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  // TODO: step 4
  ngOnDestroy() {
    this.chessWhiteRookSource.unsubscribe();
  }

}
