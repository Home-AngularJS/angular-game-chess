import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-white-knight',
  templateUrl: './chess-white-knight.component.html',
  styleUrls: ['./chess-white-knight.component.css']
})
export class ChessWhiteKnightComponent implements OnInit {

  // TODO: step 2
  chessWhiteKnightSource = this.dnd.dragSource(ItemTypes.KNIGHT, {
      beginDrag: () => ({})
  });

  // component (this is an Observable<boolean>)
  isDragging$ = this.chessWhiteKnightSource.listen(monitor =>  monitor.isDragging());

  // TODO: step 1
  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  // TODO: step 4
  ngOnDestroy() {
    this.chessWhiteKnightSource.unsubscribe();
  }

}
