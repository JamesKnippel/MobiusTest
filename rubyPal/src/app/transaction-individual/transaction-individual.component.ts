import { Component, OnInit, Input } from '@angular/core';
import { OnSendTransactionEvent } from '../models/transactions/transactions.interface';

@Component({
  selector: 'app-transaction-individual',
  templateUrl: './transaction-individual.component.html',
  styleUrls: ['./transaction-individual.component.sass']
})
export class TransactionIndividualComponent implements OnInit {

  @Input() transaction: OnSendTransactionEvent;
  
  constructor() { }

  ngOnInit() {
  }

}
