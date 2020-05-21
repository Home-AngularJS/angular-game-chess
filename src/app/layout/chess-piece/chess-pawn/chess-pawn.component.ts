import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';
import { ItemTypes } from '../../../core/model/chess-piece';

@Component({
  selector: 'app-chess-pawn',
  templateUrl: './chess-pawn.component.html',
  styleUrls: ['./chess-pawn.component.css']
})
export class ChessPawnComponent implements OnInit {

  // TODO: step 2
  chessPawnSource = this.dnd.dragSource(ItemTypes.PAWN, {
      beginDrag: () => ({})
  });

  // component (this is an Observable<boolean>)
  isDragging$ = this.chessPawnSource.listen(monitor =>  monitor.isDragging());

  // TODO: step 1
  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  // TODO: step 4
  ngOnDestroy() {
    this.chessPawnSource.unsubscribe();
  }

}
