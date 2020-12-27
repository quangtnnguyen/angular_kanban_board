import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/interface/task';
import { IUser } from 'src/app/interface/user';
import { ProjectQuery } from 'src/app/project/state/project/project.query';

@Component({
  selector: 'task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() task: ITask;
  assignees: IUser[] = [];

  constructor(private projectQuery: ProjectQuery) { }

  ngOnInit(): void {
    this.task.joined.forEach(a => {
      if (typeof (a) === 'string') {
        this.assignees.push(this.projectQuery.getValue().users.find(x => x._id === a));
      }
      this.assignees.push(this.projectQuery.getValue().users.find(x => x._id === a._id));
    });
  }
}
