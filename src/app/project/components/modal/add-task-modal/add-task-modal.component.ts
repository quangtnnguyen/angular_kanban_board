import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interface/user';
import { ProjectService } from '../../../state/project/project.service';
import { ProjectQuery } from '../../../state/project/project.query';
import { ITask, TaskStatus } from 'src/app/interface/task';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss'],
})
export class AddTaskModalComponent implements OnInit {
  taskForm: FormGroup;
  assignees$: Observable<IUser[]>;

  constructor(
    private modalRef: NzModalRef,
    private fb: FormBuilder,
    private projectService: ProjectService,
    private projectQuery: ProjectQuery
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  closeModal(): void {
    this.modalRef.close();
  }

  initForm(): void {
    this.taskForm = this.fb.group({
      title: [''],
      board: []
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
    this.closeModal();
  }
}
