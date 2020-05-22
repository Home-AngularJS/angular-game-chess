import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-black-bishop',
  templateUrl: './chess-black-bishop.component.html',
  styleUrls: ['./chess-black-bishop.component.css']
})
export class ChessBlackBishopComponent implements OnInit {

  // TODO: step 2
  chessBlackBishopSource = this.dnd.dragSource(ItemTypes.BISHOP, {
      beginDrag: () => ({})
  });

  // component (this is an Observable<boolean>)
  isDragging$ = this.chessBlackBishopSource.listen(monitor =>  monitor.isDragging());

  // TODO: step 1
  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  // TODO: step 4
  ngOnDestroy() {
    this.chessBlackBishopSource.unsubscribe();
  }

}
