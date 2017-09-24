import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent {

  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  constructor(public authService: AuthService, private router: Router) { }


  logOut() {
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }

  presentAuthDialog(mode?: 'login' | 'register') {
    this.authDialog.openDialog(mode);
  }

}
