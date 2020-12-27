import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/interface/user';
import { ITask, TaskStatus } from 'src/app/interface/task';
import { BoardService } from 'src/app/project/state/board/board.service';
import { ProjectQuery } from 'src/app/project/state/project/project.query';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss'],
})
@UntilDestroy()
export class AddTaskModalComponent implements OnInit {
  taskForm: FormGroup;
  assignees: IUser[];

  get f() {
    return this.taskForm?.controls;
  }

  constructor(
    private modalRef: NzModalRef,
    private fb: FormBuilder,
    private boardService: BoardService,
    private projectQuery: ProjectQuery
  ) {
    this.projectQuery.users$
      .pipe(untilDestroyed(this))
      .subscribe((users) => (this.assignees = users));
  }

  ngOnInit(): void {
    this.initForm();
  }

  closeModal(): void {
    this.modalRef.close();
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
    this.taskForm.reset();
    this.closeModal();
  }
}
