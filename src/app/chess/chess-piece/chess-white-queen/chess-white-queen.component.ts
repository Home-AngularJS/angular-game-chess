import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-white-queen',
  templateUrl: './chess-white-queen.component.html',
  styleUrls: ['./chess-white-queen.component.css']
})
export class ChessWhiteQueenComponent implements OnInit {

  // TODO: step 2
  chessWhiteQueenSource = this.dnd.dragSource(ItemTypes.QUEEN, {
      beginDrag: () => ({})
  });

  // component (this is an Observable<boolean>)
  isDragging$ = this.chessWhiteQueenSource.listen(monitor =>  monitor.isDragging());

  // TODO: step 1
  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  // TODO: step 4
  ngOnDestroy() {
    this.chessWhiteQueenSource.unsubscribe();
  }

}
