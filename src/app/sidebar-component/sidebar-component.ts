import { Component, signal, output, effect } from '@angular/core';
import { OptionsComponent } from './options-component/options-component';
import { SummaryComponent } from './summary-component/summary-component';


@Component({
  selector: 'app-sidebar-component',
  imports: [OptionsComponent, SummaryComponent],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css',
  host: {
    class: 'box',
  },
})
export class SidebarComponent {
  userSelected = signal<string>('0');
  userSelectedPassed = output<string>();

  onUserChange(userId: string) {
    this.userSelected.set(userId);
    this.userSelectedPassed.emit(userId);
  }
}
