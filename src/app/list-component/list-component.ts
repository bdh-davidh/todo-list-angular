import { Component, computed, inject, input } from '@angular/core';
import { TodoItemComponent } from './todo-item-component/todo-item-component';
import { TodosService } from '../todos-service.service';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list-component',
  imports: [TodoItemComponent, CdkDropList, CdkDrag],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent {
  todos = inject(TodosService).todos;
  selectedUser = input<string>('0');

  todosToRender = computed(() => {
    if (this.selectedUser() === '0') {
      return this.todos();
    } else {
      return this.todos().filter((todo) => todo.user_id === this.selectedUser());
    }
  });

  drop(event: CdkDragDrop<string[]>) {
    const filteredTodos = this.todosToRender();
    const fullTodos = [...this.todos()];

    // Get the todo item being moved
    const movedTodo = filteredTodos[event.previousIndex];

    // Find their positions in the full array
    const oldIndex = fullTodos.findIndex((todo) => todo.id === movedTodo.id);
    const targetTodo = filteredTodos[event.currentIndex];
    const newIndex = fullTodos.findIndex((todo) => todo.id === targetTodo.id);

    // Reorder in the full array
    moveItemInArray(fullTodos, oldIndex, newIndex);
    this.todos.set(fullTodos);
  }
}
