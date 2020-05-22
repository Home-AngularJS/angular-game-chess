import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-white-bishop',
  templateUrl: './chess-white-bishop.component.html',
  styleUrls: ['./chess-white-bishop.component.css']
})
export class ChessWhiteBishopComponent implements OnInit {

  // TODO: step 2
  chessWhiteBishopSource = this.dnd.dragSource(ItemTypes.BISHOP, {
      beginDrag: () => ({})
  });

  // component (this is an Observable<boolean>)
  isDragging$ = this.chessWhiteBishopSource.listen(monitor =>  monitor.isDragging());

  // TODO: step 1
  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  // TODO: step 4
  ngOnDestroy() {
    this.chessWhiteBishopSource.unsubscribe();
  }

}
