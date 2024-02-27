import { Component } from '@angular/core';
import { ToastModule, ProgressModule } from '@coreui/angular';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [ToastModule, ProgressModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  position: string;
  visible: boolean;
  percentage: number;

  constructor() {
    this.visible = true;
    this.position = 'top-end';
    this.percentage = 0;
  }

  toggleToast() {
    this.visible = !this.visible;
  }

  onVisibleChange($event: boolean) {
    this.visible = $event;
    this.percentage = !this.visible ? 0 : this.percentage;
  }

  onTimerChange($event: number) {
    this.percentage = $event * 25;
  }
}
