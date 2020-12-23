import { Component, Input, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/interface/task';

@Component({
  selector: 'board-lane',
  templateUrl: './board-lane.component.html',
  styleUrls: ['./board-lane.component.scss']
})
@UntilDestroy()
export class BoardLaneComponent implements OnInit {
  @Input() status: string;
  @Input() tasks$: Observable<ITask[]>;
  tasks: ITask[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.tasks$
      .pipe(untilDestroyed(this))
      .subscribe(tasks => {
        this.tasks = tasks
        console.log(this.tasks)
      });
  }
}
