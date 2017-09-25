import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { PaymentService } from '../services/payment.service';
import { OnSendTransactionEvent } from '../models/transactions/transactions.interface';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent implements OnInit, OnDestroy {

  transactions: OnSendTransactionEvent[];
  subscription: any;

  constructor(private paymentService: PaymentService) { }

  listTransactions() {
    this.subscription = this.paymentService.userListChange$.subscribe( transactionList => {
      this.transactions = transactionList;
    });
  }

  ngOnInit() {
    this.paymentService.getTransactions();
    this.listTransactions();
  }

  ngOnDestroy() {

  }
}
