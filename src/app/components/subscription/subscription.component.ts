import {Component, Input} from '@angular/core';
import {StatusIndicatorComponent} from "../core/status-indicator/status-indicator.component";

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [
    StatusIndicatorComponent
  ],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss'
})
export class SubscriptionComponent {
  @Input() subscriptionAmount: string = '$10';
  @Input() nextChargeDate: string = '10 May 2025';

  @Input() statusText: string = 'Active';
  @Input() statusType: 'green' | 'red' | 'yellow' = 'green';
}
