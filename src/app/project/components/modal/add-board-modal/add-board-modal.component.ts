import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { IBoard } from 'src/app/interface/board';
import { ProjectQuery } from 'src/app/project/state/project/project.query';
import { ProjectService } from 'src/app/project/state/project/project.service';

@Component({
  selector: 'app-add-board-modal',
  templateUrl: './add-board-modal.component.html',
  styleUrls: ['./add-board-modal.component.scss'],
})
export class AddBoardModalComponent implements OnInit {
  boardForm: FormGroup;
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
    this.boardForm = this.fb.group({
      name: [''],
    });
  }

  submitForm(): void {
    if (this.boardForm.invalid) {
      return;
    }
    const board: IBoard = {
      ...this.boardForm.getRawValue()
    };
    this.closeModal();
  }
}
