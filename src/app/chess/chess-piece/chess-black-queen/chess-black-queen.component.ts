import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-black-queen',
  templateUrl: './chess-black-queen.component.html',
  styleUrls: ['./chess-black-queen.component.css']
})
export class ChessBlackQueenComponent implements OnInit {

  // TODO: step 2
  chessBlackQueenSource = this.dnd.dragSource(ItemTypes.QUEEN, {
      beginDrag: () => ({})
  });

  // component (this is an Observable<boolean>)
  isDragging$ = this.chessBlackQueenSource.listen(monitor =>  monitor.isDragging());

  // TODO: step 1
  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  // TODO: step 4
  ngOnDestroy() {
    this.chessBlackQueenSource.unsubscribe();
  }

}
