import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { default as HTML5Backend } from 'react-dnd-html5-backend'
import { RouterModule } from '@angular/router';
import { SkyhookDndModule } from '@angular-skyhook/core';
import { ChessService } from './core/service/chess.service';
import { AppComponent } from './app.component';
import { SquareComponent } from './layout/square/square.component';
import { BoardComponent } from './layout/board/board.component';
import { ContainerComponent } from './layout/container/container.component';
import { ChessKingComponent } from "./layout/chess-piece/chess-king/chess-king.component";
import { ChessQueenComponent } from "./layout/chess-piece/chess-queen/chess-queen.component";
import { ChessBishopComponent } from "./layout/chess-piece/chess-bishop/chess-bishop.component";
import { ChessKnightComponent } from './layout/chess-piece/chess-knight/chess-knight.component';
import { ChessRookComponent } from "./layout/chess-piece/chess-rook/chess-rook.component";
import { ChessPawnComponent } from "./layout/chess-piece/chess-pawn/chess-pawn.component";
// import { ItemTypes } from './chess-piece';
// import { Position } from './position';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ContainerComponent }]),
    SkyhookDndModule.forRoot({ backend: HTML5Backend }) // TODO: нужно для синглтона
  ],
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    ContainerComponent,
    ChessKingComponent,
    ChessQueenComponent,
    ChessBishopComponent,
    ChessKnightComponent,
    ChessRookComponent,
    ChessPawnComponent
  ],
  providers: [ ChessService ],
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
