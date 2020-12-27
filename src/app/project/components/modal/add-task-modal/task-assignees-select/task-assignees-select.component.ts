import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IUser } from 'src/app/interface/user';

@Component({
  selector: 'task-assignees-select',
  templateUrl: './task-assignees-select.component.html',
  styleUrls: ['./task-assignees-select.component.scss']
})
export class TaskAssigneesSelectComponent implements OnInit {
  @Input() control: FormControl;
  @Input() users: IUser[];

  constructor() {
  }
  ngOnInit(): void {
  }

  getUser(userId: string): any {
    return this.users.find((user) => user._id === userId);
  }
}
