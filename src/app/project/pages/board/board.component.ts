import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BoardQuery } from '../../state/board/board.query';
import { ProjectQuery } from '../../state/project/project.query';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
@UntilDestroy()
export class BoardComponent implements OnInit {
  breadcrumbs: string[] = ['Projects'];

  constructor(private projectQuery: ProjectQuery) {
    this.projectQuery.users$
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  ngOnInit(): void {
    this.breadcrumbs.push(this.projectQuery.getValue().boards.find(board => board._id === localStorage.getItem('selectedBoardId'))?.name);
  }
}
