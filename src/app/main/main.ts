import { Component, signal } from '@angular/core';
import { SidebarComponent } from '../sidebar-component/sidebar-component';
import { ListComponent } from '../list-component/list-component';
import { NewTodoComponent } from '../new-todo-component/new-todo-component';

@Component({
  selector: 'app-main',
  imports: [SidebarComponent, ListComponent, NewTodoComponent],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class MainComponent {
  selectedUser = signal<string>('0');
  showAddTodo = signal(false);
}
