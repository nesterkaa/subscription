import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {PaymentMethod} from "../../models";
import {PaymentMethodComponent} from "./payment-method/payment-method.component";

@Component({
  selector: 'app-payment-methods',
  standalone: true,
  imports: [
    NgForOf,
    PaymentMethodComponent
  ],
  templateUrl: './payment-methods.component.html',
  styleUrl: './payment-methods.component.scss'
})
export class PaymentMethodsComponent {
  paymentMethods: PaymentMethod[] = [
    { logo: 'assets/icons/logo/mastercard.png', last4: '4567' },
    { logo: 'assets/icons/logo/visa.png', last4: '1234' }
  ];
}
