import { Component, input, signal } from '@angular/core';
import { OptionsComponent } from './options-component/options-component';
import { ListComponent } from './list-component/list-component';

@Component({
  selector: 'app-root',
  imports: [OptionsComponent, ListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    class: 'box stack',
  },
})
export class App {
  protected readonly title = signal('Todos');

  selectedUser = signal<number | undefined>(undefined);
}
