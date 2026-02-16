import { Component, computed, inject, input } from '@angular/core';
import { TodoItemComponent } from './todo-item-component/todo-item-component';
import { TodosService } from '../todos-service.service';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';


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
    const reOrderedArray = [...this.todos()];
    moveItemInArray(reOrderedArray, event.previousIndex, event.currentIndex);
    this.todos.set(reOrderedArray);
  }
}
