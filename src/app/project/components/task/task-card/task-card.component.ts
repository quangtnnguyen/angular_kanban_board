import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/interface/task';
import { IUser } from 'src/app/interface/user';

@Component({
  selector: 'task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() task: ITask;
  assignees: IUser[];

  constructor() { }

  ngOnInit(): void {
  }

}
