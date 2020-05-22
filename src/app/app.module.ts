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
import { ChessBlackKingComponent } from "./layout/chess-piece/chess-black-king/chess-black-king.component";
import { ChessBlackQueenComponent } from "./layout/chess-piece/chess-black-queen/chess-black-queen.component";
import { ChessBlackBishopComponent } from "./layout/chess-piece/chess-black-bishop/chess-black-bishop.component";
import { ChessBlackKnightComponent } from './layout/chess-piece/chess-black-knight/chess-black-knight.component';
import { ChessBlackRookComponent } from "./layout/chess-piece/chess-black-rook/chess-black-rook.component";
import { ChessBlackPawnComponent } from "./layout/chess-piece/chess-black-pawn/chess-black-pawn.component";
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
    ChessBlackKingComponent,
    ChessBlackQueenComponent,
    ChessBlackBishopComponent,
    ChessBlackKnightComponent,
    ChessBlackRookComponent,
    ChessBlackPawnComponent
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
