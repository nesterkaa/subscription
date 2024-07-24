import { Component } from '@angular/core';
import {Transaction} from "../../models";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.scss'
})
export class TransactionHistoryComponent {
  transactions: Transaction[] = [
    { id: 1, sum: -10, date: '15 April 2025', comment: 'Subscription renewal.' },
    { id: 2, sum: -10, date: '15 April 2025', comment: 'Subscription renewal.' },
    { id: 3, sum: -10, date: '15 April 2025', comment: 'Subscription renewal.' },
    { id: 4, sum: -10, date: '15 April 2025', comment: 'Subscription renewal.' },
    { id: 5, sum: -10, date: '15 April 2025', comment: 'Subscription renewal.' }
  ];
}
