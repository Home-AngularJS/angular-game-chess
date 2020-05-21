import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-queen',
  templateUrl: './chess-queen.component.html',
  styleUrls: ['./chess-queen.component.css']
})
export class ChessQueenComponent implements OnInit {

  // TODO: step 2
  chessQueenSource = this.dnd.dragSource(ItemTypes.QUEEN, {
      beginDrag: () => ({})
  });

  // component (this is an Observable<boolean>)
  isDragging$ = this.chessQueenSource.listen(monitor =>  monitor.isDragging());

  // TODO: step 1
  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  // TODO: step 4
  ngOnDestroy() {
    this.chessQueenSource.unsubscribe();
  }

}
