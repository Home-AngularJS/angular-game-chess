import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-black-knight',
  templateUrl: './chess-black-knight.component.html',
  styleUrls: ['./chess-black-knight.component.css']
})
export class ChessBlackKnightComponent implements OnInit {

  // TODO: step 2
  chessBlackKnightSource = this.dnd.dragSource(ItemTypes.KNIGHT, {
      beginDrag: () => ({})
  });

  // component (this is an Observable<boolean>)
  isDragging$ = this.chessBlackKnightSource.listen(monitor =>  monitor.isDragging());

  // TODO: step 1
  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  // TODO: step 4
  ngOnDestroy() {
    this.chessBlackKnightSource.unsubscribe();
  }

}
