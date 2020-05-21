import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { KnightComponent } from './layout/chess-piece/knight/knight.component';
import { SquareComponent } from './layout/square/square.component';
import { BoardComponent } from './layout/board/board.component';
import { ContainerComponent } from './layout/container/container.component';
import { default as HTML5Backend } from 'react-dnd-html5-backend'
import { RouterModule } from '@angular/router';
import { SkyhookDndModule } from '@angular-skyhook/core';
import { GameService } from './core/service/game.service';
import { BoardSquareComponent } from './layout/board-square/board-square.component';
// import { ItemTypes } from './chess-piece';
// import { Coord } from './coord';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ContainerComponent }]),
    SkyhookDndModule.forRoot({ backend: HTML5Backend }) // TODO: нужно для синглтона
  ],
  declarations: [
    AppComponent,
    KnightComponent,
    SquareComponent,
    BoardComponent,
    ContainerComponent,
    BoardSquareComponent
  ],
  providers: [ GameService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // TODO: Обеспечивает только одну глобальную инъекцию через приложение
 /* static forRoot(): ModuleWithProviders {
    return {
      ngModule: GlobalsModule,
      providers: [ Globals ] // TODO: единственный провайдер
    };
  }
  */
}
