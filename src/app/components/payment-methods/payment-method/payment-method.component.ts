import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss'],
  standalone: true
})
export class PaymentMethodComponent {
  @Input() logo: string = '';
  @Input() last4: string = '';
}
