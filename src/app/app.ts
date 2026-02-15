import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewTodoComponent } from './new-todo-component/new-todo-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewTodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Todos');
  selectedUser = signal<string>('0');
  showAddTodo = signal(false);
}
