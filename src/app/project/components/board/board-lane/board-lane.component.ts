import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/interface/task';
import { BoardService } from 'src/app/project/state/board/board.service';

@Component({
  selector: 'board-lane',
  templateUrl: './board-lane.component.html',
  styleUrls: ['./board-lane.component.scss'],
  encapsulation: ViewEncapsulation.None
})
@UntilDestroy()
export class BoardLaneComponent implements OnInit {
  @Input() status: string;
  @Input() tasks$: Observable<ITask[]>;
  tasks: ITask[] = [];

  drop(event: CdkDragDrop<ITask[]>): void {
    const newTask: ITask = event.item.data;

    if (event.previousContainer === event.container) {
      console.log(event.previousIndex);
      console.log(event.currentIndex);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      newTask.status = event.container.id;
      this.boardService.updateTask(newTask);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousContainer.data.indexOf(event.item.data),
        event.currentIndex
      );
    }
  }

  constructor(private boardService: BoardService) {
  }

  ngOnInit(): void {
    this.tasks$
      .pipe(untilDestroyed(this))
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }
}
