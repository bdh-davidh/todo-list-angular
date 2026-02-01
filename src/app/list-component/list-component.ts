import { Component, computed, inject, input } from '@angular/core';
import { TodoItemComponent } from './todo-item-component/todo-item-component';
import { TodosService } from '../todos-service.service';



@Component({
  selector: 'app-list-component',
  imports: [TodoItemComponent],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent {
  todos = inject(TodosService).todos;
  selectedUser = input<string>();

  todosToRender = computed(() => {
    if (!this.selectedUser()) {
      return this.todos();
    } else {
      return this.todos().filter((todo) => todo.user_id === this.selectedUser());
    }
  });
}
