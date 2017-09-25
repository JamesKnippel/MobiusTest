import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule, Routes } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { PaymentService } from './services/payment.service';
import { AuthService } from './services/authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { TransactionIndividualComponent } from './transaction-individual/transaction-individual.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransactionsComponent,
    DashboardComponent,
    ToolbarComponent,
    LoginFormComponent,
    RegisterFormComponent,
    AuthDialogComponent,
    UserListComponent,
    UserComponent,
    TransactionIndividualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ Angular2TokenService, AuthService, AuthGuard, PaymentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
