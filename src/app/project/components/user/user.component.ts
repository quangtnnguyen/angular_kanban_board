
import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/user';

@Component({
  selector: 'j-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: IUser;

  constructor() {

  }
  ngOnInit(): void {
  }
}
