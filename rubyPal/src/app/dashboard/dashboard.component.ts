import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authentication.service';
import { Angular2TokenService } from 'angular2-token';
import { Http } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(
    public authTokenService: Angular2TokenService,
    public authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  /* send home on logout from profile */
  logOut() {
    this.authService.logOutUser().subscribe(() => this.router.navigate['/home']);
  }

}
