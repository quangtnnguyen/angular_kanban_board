import { Component, OnInit } from '@angular/core';
import { ILane } from 'src/app/interface/lane';

@Component({
  selector: 'board-dnd',
  templateUrl: './board-dnd.component.html',
  styleUrls: ['./board-dnd.component.scss']
})
export class BoardDndComponent implements OnInit {

  lanes: string[] = [
    'Backlog', 'To do', 'In progress', 'Done'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
