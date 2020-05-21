import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-bishop',
  templateUrl: './chess-bishop.component.html',
  styleUrls: ['./chess-bishop.component.css']
})
export class ChessBishopComponent implements OnInit {

  // TODO: step 2
  chessBishopSource = this.dnd.dragSource(ItemTypes.BISHOP, {
      beginDrag: () => ({})
  });

  // component (this is an Observable<boolean>)
  isDragging$ = this.chessBishopSource.listen(monitor =>  monitor.isDragging());

  // TODO: step 1
  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  // TODO: step 4
  ngOnDestroy() {
    this.chessBishopSource.unsubscribe();
  }

}
