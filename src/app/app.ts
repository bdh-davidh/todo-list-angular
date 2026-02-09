import { Component, input, signal } from '@angular/core';
import { ListComponent } from './list-component/list-component';
import { SidebarComponent } from './sidebar-component/sidebar-component';
import { NewTodoComponent } from './new-todo-component/new-todo-component';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, ListComponent, NewTodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Todos');
  selectedUser = signal<string>('0');
  showAddTodo = signal(false);
}
