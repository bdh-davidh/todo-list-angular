import { Component, inject, input, computed, signal } from '@angular/core';
import { UsersService } from '../../users-service.service';
import { TodosService } from '../../todos-service.service';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-summary-component',
  imports: [],
  templateUrl: './summary-component.html',
  styleUrl: './summary-component.css',
})
export class SummaryComponent {
  users = inject(UsersService).users;
  todos = inject(TodosService).todos;
  userSelected = input<string>();

  filterTodos = computed(() => (type: 'category' | 'priority', value: string) => {
    if (this.userSelected() === '0' ) {
      return this.todos().filter((todo: Todo) => todo[type] === value).length;
    }

    return this.todos()
      .filter((todo: Todo) => todo.user_id === this.userSelected())
      .filter((todo: Todo) => todo[type] === value).length;
  });

  highPriority = () => this.filterTodos()('priority', 'high');
  mediumPriority = () => this.filterTodos()('priority', 'medium');
  lowPriority = () => this.filterTodos()('priority', 'low');
  personalCategory = () => this.filterTodos()('category', 'personal');
  workCategory = () => this.filterTodos()('category', 'work');
}
