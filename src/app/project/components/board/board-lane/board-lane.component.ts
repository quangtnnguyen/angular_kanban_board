import { Component, Input, OnInit } from '@angular/core';
import { ILane } from 'src/app/interface/lane';
import { ITask } from 'src/app/interface/task';

@Component({
  selector: 'board-lane',
  templateUrl: './board-lane.component.html',
  styleUrls: ['./board-lane.component.scss']
})
export class BoardLaneComponent implements OnInit {
  @Input() lane: ILane;
  tasks: ITask[];
  task: ITask;

  constructor() {
   }

  ngOnInit(): void {
  }

}
