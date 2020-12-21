import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, combineLatest, merge } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { IBoard } from 'src/app/interface/board';
import { ProjectQuery } from '../../state/project/project.query';
import { ProjectService } from '../../state/project/project.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
@UntilDestroy()
export class BoardsComponent implements OnInit {
  isVisible = false;
  NO_BOARD_MESSAGE = 'Empty list';
  boardForm: FormGroup;
  breadcrumbs: string[] = ['Projects', 'Angular Jira Clone', 'Boards'];

  boards: IBoard[] = [];

  constructor(private fb: FormBuilder, private projectQuery: ProjectQuery, private projectService: ProjectService) {
    this.projectService.getBoards();
    this.projectQuery.boards$.subscribe(boards => this.boards = boards);
  }

  ngOnInit(): void {
    this.initForm();
  }

  submitForm(): void {
    if (this.boardForm.invalid) {
      return;
    }
    const newBoard = this.boardForm.getRawValue();
    this.projectService.addBoard(newBoard);
    this.boardForm.reset();
    this.closeModal();
  }

  initForm(): void {
    this.boardForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  closeModal(): void {
    this.isVisible = false;
  }

  showModal(): void {
    this.isVisible = true;
  }
}
