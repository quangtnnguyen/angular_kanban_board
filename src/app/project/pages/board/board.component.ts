import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ITask, TaskStatus } from 'src/app/interface/task';
import { IUser } from 'src/app/interface/user';
import { BoardService } from '../../state/board/board.service';
import { ProjectQuery } from '../../state/project/project.query';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
@UntilDestroy()
export class BoardComponent implements OnInit {

  get f() {
    return this.taskForm?.controls;
  }

  constructor(
    private fb: FormBuilder,
    private boardService: BoardService,
    private projectQuery: ProjectQuery
  ) {
    this.projectQuery.users$
      .pipe(untilDestroyed(this))
      .subscribe((users) => (this.assignees = users));
  }
  isVisible = false;
  taskForm: FormGroup;
  assignees: IUser[];
  breadcrumbs: string[] = ['Projects', 'Board'];

  ngOnInit(): void {
    this.initForm();
    this.breadcrumbs.push(this.projectQuery.getValue().boards.find(board => board._id === localStorage.getItem('selectedBoardId'))?.name);
  }

  closeModal(): void {
    this.isVisible = false;
  }

  showModal(): void {
    this.isVisible = true;
  }

  initForm(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      joined: [[]],
      board: [localStorage.getItem('selectedBoardId'), Validators.required],
    });
  }

  submitForm(): void {
    if (this.taskForm.invalid) {
      return;
    }
    const task: ITask = {
      ...this.taskForm.getRawValue(),
      status: TaskStatus.TODO,
    };
    this.boardService.addTask(task);
    this.initForm();
    this.closeModal();
  }
}
