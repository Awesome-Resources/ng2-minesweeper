/**
 * game-board.component
 */

import { Component, OnInit } from "@angular/core";
import { GameLevelService, ILevel } from "./game-level.service";

@Component({
    selector: 'app-game-board',
    templateUrl: './game-board.component.html',
    styleUrls: ['./game-board.component.scss']
})

export class GameBoardComponent implements OnInit {

    private level: ILevel;

    constructor( private gameLevel: GameLevelService ) {
    }

    ngOnInit(): void {
        this.level = this.gameLevel.GameLevel;
    }
}