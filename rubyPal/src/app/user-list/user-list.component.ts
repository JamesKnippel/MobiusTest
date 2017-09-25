import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { Observer } from 'rxjs/Observer';
import { PaymentService } from '../services/payment.service';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  subscription: any;
  users: any[];

  loggedIn: any = {
    email: '',
    num_credits: ''
  };

  constructor(private paymentService: PaymentService,
    private httpClient: HttpClient,
    private router: Router,
    private authTokenService: Angular2TokenService) { }

  listUsers() {
    this.subscription = this.paymentService.userListChange$.subscribe( userList => {
      this.users = userList;
    });
  }

  async getBalance (): Promise<any> {
    await this.paymentService.getUser(this.authTokenService.currentUserData.email);
    this.loggedIn = this.paymentService.loggedInUser;
    console.log(this.loggedIn, 'logged in user');
  }

  ngOnInit() {
    this.getBalance();
    this.paymentService.getUsers();
    this.users = this.paymentService.currentUsers();
    this.listUsers();
  }

}
