import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  loggedIn: any = {
    email: '',
    num_credits: ''
  };

  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  constructor(public authService: AuthService,
              private authTokenService: Angular2TokenService,
              private router: Router,
              private paymentService: PaymentService) { }


  logOut() {
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }

  presentAuthDialog(mode?: 'login' | 'register') {
    this.authDialog.openDialog(mode);
  }

  ngOnInit() {
  this.loggedIn = this.paymentService.getUser(this.authTokenService.currentUserData.email);
  console.log(this.loggedIn, 'logged in user');
  }

}
