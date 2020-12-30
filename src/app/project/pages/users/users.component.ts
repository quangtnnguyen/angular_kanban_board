import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { IUser } from 'src/app/interface/user';
import { ProjectQuery } from '../../state/project/project.query';
import { ProjectService } from '../../state/project/project.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
@UntilDestroy()
export class UsersComponent implements OnInit {
  isVisible = false;
  NO_BOARD_MESSAGE = 'Empty list';
  userForm: FormGroup;
  breadcrumbs: string[] = ['Projects', 'A Wibu\'s project', 'Users'];

  users: IUser[] = [];

  constructor(
    private fb: FormBuilder,
    private projectQuery: ProjectQuery,
    private projectService: ProjectService
  ) {
    this.projectService.getUsers();
    this.projectQuery.users$
      .pipe(untilDestroyed(this))
      .subscribe((users) => (this.users = users));
  }

  ngOnInit(): void {
    this.initForm();
  }

  submitForm(): void {
    if (this.userForm.invalid) {
      return;
    }
    const newUser = this.userForm.getRawValue();
    this.projectService.addUser(newUser);
    this.userForm.reset();
    this.closeModal();
  }

  initForm(): void {
    this.userForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
    });
  }

  closeModal(): void {
    this.isVisible = false;
  }

  showModal(): void {
    this.isVisible = true;
  }
}
