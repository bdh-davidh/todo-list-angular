import { Component, signal } from '@angular/core';
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
  userSelected = signal<number>(0);
}
