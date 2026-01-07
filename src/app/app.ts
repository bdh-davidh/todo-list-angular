import { Component, signal, input } from '@angular/core';
import { ListComponent } from './list-component/list-component';
import { SidebarComponent } from './sidebar-component/sidebar-component';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, ListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Todos');
  selectedUser = signal<number>(0);
}
