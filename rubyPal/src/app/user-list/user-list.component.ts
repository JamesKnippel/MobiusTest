import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { Observer } from 'rxjs/Observer';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  subscription: any;
  users: any[];

  constructor(private paymentService: PaymentService,
    private httpClient: HttpClient,
    private router: Router) { }

  listUsers() {
    this.subscription = this.paymentService.userListChange$.subscribe( userList => {
      this.users = userList;
    });
  }

  ngOnInit() {
    this.paymentService.getUsers();
    this.users = this.paymentService.currentUsers();
    this.listUsers();
  }

}
