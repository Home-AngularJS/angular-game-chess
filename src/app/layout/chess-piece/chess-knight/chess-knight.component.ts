import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-knight',
  templateUrl: './chess-knight.component.html',
  styleUrls: ['./chess-knight.component.css']
})
export class ChessKnightComponent implements OnInit {

  // TODO: step 2
  chessKnightSource = this.dnd.dragSource(ItemTypes.KNIGHT, {
      beginDrag: () => ({})
  });

  // component (this is an Observable<boolean>)
  isDragging$ = this.chessKnightSource.listen(monitor =>  monitor.isDragging());

  // TODO: step 1
  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  // TODO: step 4
  ngOnDestroy() {
    this.chessKnightSource.unsubscribe();
  }

}
