import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SubscriptionComponent} from "./subscription/subscription.component";
import {PaymentMethodsComponent} from "./payment-methods/payment-methods.component";
import {TransactionHistoryComponent} from "./transaction-history/transaction-history.component";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SubscriptionComponent, PaymentMethodsComponent, TransactionHistoryComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'subscription';
}
