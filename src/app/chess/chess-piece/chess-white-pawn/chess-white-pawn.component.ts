import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-white-pawn',
  templateUrl: './chess-white-pawn.component.html',
  styleUrls: ['./chess-white-pawn.component.css']
})
export class ChessWhitePawnComponent implements OnInit {

  // TODO: step 2
  chessWhitePawnSource = this.dnd.dragSource(ItemTypes.PAWN, {
      beginDrag: () => ({})
  });

  // component (this is an Observable<boolean>)
  isDragging$ = this.chessWhitePawnSource.listen(monitor =>  monitor.isDragging());

  // TODO: step 1
  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  // TODO: step 4
  ngOnDestroy() {
    this.chessWhitePawnSource.unsubscribe();
  }

}
