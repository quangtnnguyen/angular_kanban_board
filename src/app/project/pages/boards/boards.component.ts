import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IBoard } from 'src/app/interface/board';
import { ProjectQuery } from '../../state/project/project.query';
import { ProjectService } from '../../state/project/project.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
})
@UntilDestroy()
export class BoardsComponent implements OnInit {
  isVisible = false;
  NO_BOARD_MESSAGE = 'Empty list';
  boardForm: FormGroup;
  breadcrumbs: string[] = ['Projects', 'A Wibu\'s project', 'Boards'];

  boards: IBoard[];

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    public projectQuery: ProjectQuery,
    private projectService: ProjectService,
    private router: Router
  ) {
    this.projectService.getBoards().subscribe(
      (success) => {
        this.projectQuery.boards$
          .pipe(untilDestroyed(this))
          .subscribe((boards) => (this.boards = boards));
      },
      () => {
        this.message.error('Server die bro 🤦‍♂️');
      }
    );

  }

  ngOnInit(): void {
    this.boards = [];
    this.initForm();
  }

  handleBoardClick(boardId: string): void {
    this.projectService.setSelectedBoardId(boardId);
    this.router.navigateByUrl(`project/board/${boardId}`);
  }

  submitForm(): void {
    if (this.boardForm.invalid) {
      return;
    }
    const newBoard = this.boardForm.getRawValue();
    this.projectService.addBoard(newBoard).subscribe(
      (success) => {
        this.message.success('Yayy new board created 🍻');
        this.initForm();
      },
      (error) => {
        this.message.error('Server die bro 🤦‍♂️');
      }
    );
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
