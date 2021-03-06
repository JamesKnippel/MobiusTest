import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../models/users/user.interface';
import { PaymentService } from '../services/payment.service';
import { Angular2TokenService } from 'angular2-token';
import { OnSendTransactionEvent } from '../models/transactions/transactions.interface';

/* we'll be sending this data to our feed */

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})


export class UserComponent implements OnInit {
  amount: any;

  @Input() user: User;

  // @Output()
  // public onSendTransaction: EventEmitter<OnSendTransactionEvent> = new EventEmitter<OnSendTransactionEvent>();

  constructor(private paymentService: PaymentService,
              private authTokenService: Angular2TokenService) { }

  async sendTransaction(): Promise<any> {
    /* calls our payment service to update the database */
    await this.paymentService.addCredits(this.user.email, this.amount);
    this.paymentService.subtractCredits(this.authTokenService.currentUserData.email, this.amount);
    // /* event to tell our feed there's a need to add a row */
    this.paymentService.addTransaction(this.authTokenService.currentUserData.email, this.user.email, this.amount);
  }

  ngOnInit() {
  }



}
