import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/interface/user';
import { ProjectQuery } from '../../state/project/project.query';
import { ProjectService } from '../../state/project/project.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  isVisible = false;
  NO_BOARD_MESSAGE = 'Empty list';
  userForm: FormGroup;
  breadcrumbs: string[] = ['Projects', 'Angular Jira Clone', 'Users'];

  users: IUser[] = [];

  constructor(private fb: FormBuilder, private projectQuery: ProjectQuery, private projectService: ProjectService) {
    this.projectService.getUsers();
    this.projectQuery.users$.subscribe(users => this.users = users);
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
