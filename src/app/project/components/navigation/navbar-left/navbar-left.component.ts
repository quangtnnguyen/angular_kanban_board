import { Component, OnInit } from '@angular/core';
import { AddTaskModalComponent } from '../../modal/add-task-modal/add-task-modal.component';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent implements OnInit {
  items: NavItem[];
  constructor(private modalService: NzModalService) { }

  ngOnInit(): void {
    this.items = [
      new NavItem('search', 'Search issues', null),
      new NavItem('plus', 'Create issue', this.openCreateIssueModal.bind(this))
    ];
  }

  openCreateIssueModal(): void {
    this.modalService.create({
      nzContent: AddTaskModalComponent,
      nzClosable: false,
      nzFooter: null,
      nzWidth: 700
    });
  }

}

class NavItem {
  constructor(public icon: string, public tooltip: string, public handler: Handler) { }
}

type Handler = () => void;
