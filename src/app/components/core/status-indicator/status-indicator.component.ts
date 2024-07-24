import { Component, Input } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.scss'],
  imports: [
    NgClass
  ],
  standalone: true
})
export class StatusIndicatorComponent {
  @Input() text: string = 'Status';
  @Input() statusType: 'green' | 'red' | 'yellow' = 'green';
}
