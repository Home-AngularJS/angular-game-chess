import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-rook',
  templateUrl: './chess-rook.component.html',
  styleUrls: ['./chess-rook.component.css']
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
