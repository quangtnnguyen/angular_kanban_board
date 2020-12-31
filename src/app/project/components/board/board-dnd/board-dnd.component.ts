import { Component } from '@angular/core';
import { BoardQuery } from 'src/app/project/state/board/board.query';

@Component({
  selector: 'board-dnd',
  templateUrl: './board-dnd.component.html',
  styleUrls: ['./board-dnd.component.scss']
})
export class BoardDndComponent {
  taskStatuses: string[] = [
    'TODO', 'IN_PROGRESS', 'DONE'
  ];

  constructor(public boardQuery: BoardQuery) {
  }

}
