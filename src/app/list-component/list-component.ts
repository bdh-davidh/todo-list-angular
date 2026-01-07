import { Component, computed, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TodosService } from '../todos-service.service';



@Component({
  selector: 'app-list-component',
  imports: [DatePipe],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent {
  todos = inject(TodosService).todos;
  selectedUser = input<number>();

  todosToRender = computed(() => {
    if (!this.selectedUser()) {
      return this.todos;
    } else {
      return this.todos.filter((todo) => todo.user_id === this.selectedUser())
    }
  })
}
