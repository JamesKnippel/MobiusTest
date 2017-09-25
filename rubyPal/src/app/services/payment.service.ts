import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { Observer } from 'rxjs/Observer';
import { User } from '../models/users/user.interface';

@Injectable()
export class PaymentService {
  users: User[];
  loggedInUser: any;
  userBalanceChange$: Observable<any>;
  userListChange$: Observable<any>;
  private _observerBalanceChange: Observer<any>;
  private _observerListChange: Observer<any>;
  constructor(private http: HttpClient) {
    // Declare observables so that other components can subscribe to data changes
    this.userBalanceChange$ = new Observable((observer) => {
      this._observerBalanceChange = observer;
    })
      .share();

    this.userListChange$ = new Observable((observer) => {
      this._observerListChange = observer;
    })
      .share();
  }

  addCredits(email: string, amount) {
    this.http.post(`/api/v1/users/add/${email}`, {num_credits: amount})
      .subscribe((result) => {
        console.log(result, 'result of credit add');
      });
  }

  subtractCredits(email: string, amount) {
    this.http.post(`/api/v1/users/subtract/${email}`, {num_credits: amount})
      .subscribe((result) => {
        console.log(result, 'result of credit subtraction');
      });
  }

  getUsers() {
    this.http.get('/api/v1/users')
      .subscribe((data: any) => {
        this.users = data;
        this._observerListChange.next(data);
      });
  }

  getUser(email: string) {
    this.http.get(`/api/v1/users/${email}`)
      .subscribe((data: any) => {
        this.loggedInUser = data;
        console.log('server side, this is logged in', this.loggedInUser)
        // this._observerBalanceChange.next(data);
      });
  }

  currentUsers(): any {
    return this.users;
  }
}
