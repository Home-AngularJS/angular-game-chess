import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-black-pawn',
  templateUrl: './chess-black-pawn.component.html',
  styleUrls: ['./chess-black-pawn.component.css']
})
export class ChessBlackPawnComponent implements OnInit {

  // TODO: step 2
  chessBlackPawnSource = this.dnd.dragSource(ItemTypes.PAWN, {
      beginDrag: () => ({})
  });

  // component (this is an Observable<boolean>)
  isDragging$ = this.chessBlackPawnSource.listen(monitor =>  monitor.isDragging());

  // TODO: step 1
  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  // TODO: step 4
  ngOnDestroy() {
    this.chessBlackPawnSource.unsubscribe();
  }

}
