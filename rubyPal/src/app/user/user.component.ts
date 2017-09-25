import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../models/users/user.interface';
import { PaymentService } from '../services/payment.service';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})


export class UserComponent implements OnInit {
  amount: any;

  @Input() user: User;

  constructor(private paymentService: PaymentService,
              private authTokenService: Angular2TokenService) { }

  async sendTransaction(): Promise<any> {
    await this.paymentService.addCredits(this.user.email, this.amount);
    this.paymentService.subtractCredits(this.authTokenService.currentUserData.email, this.amount);
  }

  ngOnInit() {
  }



}
