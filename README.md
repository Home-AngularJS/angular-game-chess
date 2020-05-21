# Chess - Welcome to @angular-skyhook

* [Chess Tutorial](https://cormacrelf.github.io/angular-skyhook/additional-documentation/chess-tutorial.html) **(** [Учебник по шахматам](https://translate.google.com.ua/translate?hl=ru&tab=rT&sl=en&tl=ru&u=https%3A%2F%2Fcormacrelf.github.io%2Fangular-skyhook%2Fadditional-documentation%2Fchess-tutorial.html) **)**
  * [React DnD Tutorial](https://react-dnd.github.io/react-dnd/about) **(** Drag and Drop for React **)**
* [Code-Demo](https://stackblitz.com/edit/angular-skyhook-chess)
  * Исходный код на GitHub **(** angular-skyhook **)** с четырьмя коммитами:
    * [board visuals with static knight](https://github.com/cormacrelf/angular-skyhook/tree/chessboard-1/packages/examples/src/app/chessboard)
    * [game logic and click-based movement](https://github.com/cormacrelf/angular-skyhook/tree/chessboard-2/packages/examples/src/app/chessboard)
    * [drag and drop](https://github.com/cormacrelf/angular-skyhook/tree/chessboard-3/packages/examples/src/app/chessboard)
    * [visual move guidance and custom drag preview](https://github.com/cormacrelf/angular-skyhook/tree/chessboard-4/packages/examples/src/app/chessboard)
  * [Поиграть на живом демо-примере](https://cormacrelf.github.io/angular-skyhook/examples/index.html)
  * `SkyhookDndModule` - подключить бэкэнд-модуль из библиотеки *React DnD*
  * `HTML5Backend` - подключить HTML5 из библиотеки *React DnD*
  * `SquareComponent` - один черный/белый-квадрат на доске
  * `BoardComponent` - 64-квадрата
  * `ChessKnightComponent` - рендеринг одной фигуры
* Link Docs:
  * https://cormacrelf.github.io/angular-skyhook/additional-documentation/chess-tutorial.html
  * https://github.com/cormacrelf/angular-skyhook/tree/chessboard-1/packages/examples/src/app/chessboard
* [CHESS SYMBOLS](http://www.i2symbol.com/symbols/chess) **(** `http://www.i2symbol.com/symbols/chess` **)**
  * **White Chess Symbols**
    1. King (Король) `♔`
    2. Queen (Королева) `♕`
    3. Bishop (Слон)  `♗`
    4. Knight (Конь) `♘`
    5. Pawn (Пешка)  `♙`
    6. Rook (Ладья)  `♖`
  * **Black Chess Symbols**
    1. King (Король) `♚`
    2. Queen (Королева) `♛`
    3. Bishop (Слон) `♝`
    4. Knight (Конь) `♞`
    5. Pawn (Пешка) `♟`
    6. Rook (Ладья) `♜`


## Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4

Run `ng serve` for a dev local server.

Local navigate to `http://localhost:4200`

Run `ng serve --port 9001 --host 0.0.0.0` for a dev remote server.

Remote navigate to `http://192.168.1.124:9001`


## Build

Run `ng build` to build the project.
The build artifacts will be stored in the `dist/` directory.
Use the `--prod` flag for a production build.


# Error Help

* `DevTools failed to load SourceMap`
  * https://ru.stackoverflow.com/questions/1078942/Ошибка-в-devtools
  * https://qna.habr.com/q/644551
  * https://stackoverflow.com/questions/60302529/devtools-failed-to-parse-sourcemap-chrome-extension
* `Can't resolve all parameters (?)`
  * https://github.com/thymikee/jest-preset-angular/issues/288
  * https://stackoverflow.com/questions/46845813/emitdecoratormetadata-and-its-importance-in-transpiled-code
  * https://angular.io/guide/angular-compiler-options
* `ERROR TypeError: manager.getContext is not a function at new HTML5Backend`
  * https://github.com/react-dnd/react-dnd/issues/1706
