import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chess-container',
    template: `
    <div class="container">
        <app-board-component></app-board-component>
    </div>
    `, styles: [`
    .container { 
        width: 560px;
        height: 560px;
    }
    `]
})

export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


