import { Component, OnInit } from '@angular/core';
import { SkyhookDndService } from "@angular-skyhook/core";
import { ItemTypes } from '../constants';

@Component({
  selector: 'app-knight',
 // template: `<span>♘</span>`,
    template: `<span [dragSource]="knightSource" [class.dragging]="isDragging$|async">♘</span>`,
 // providers: [ SkyhookDndService],
  styles: [`
    span {
        font-weight: 400;
        font-size: 54px;
        line-height: 70px;
    }
    /* in the style block */
    .dragging {
        opacity: 0.25;
        color : red;
    }
    `]
})

export class KnightComponentComponent implements OnInit {


       // step 2
    knightSource = this.dnd.dragSource(ItemTypes.KNIGHT, {
        beginDrag: () => ({})
    });


    // component
    // (this is an Observable<boolean>)
    isDragging$ = this.knightSource.listen(monitor =>  monitor.isDragging());
        
  // step 1
    constructor(private dnd: SkyhookDndService) { }
   
   // step 4
    ngOnDestroy() {
        this.knightSource.unsubscribe();
    }

  ngOnInit() {
  }

}
