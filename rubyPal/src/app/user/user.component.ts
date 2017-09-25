import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../models/users/user.interface';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})


export class UserComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }


  send() {
    // fill this out
  }

}
