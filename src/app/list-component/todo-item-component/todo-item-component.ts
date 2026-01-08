import { Component, input } from '@angular/core';
import { Todo } from '../../todo.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item-component',
  imports: [DatePipe],
  templateUrl: './todo-item-component.html',
  styleUrl: './todo-item-component.css',
})
export class TodoItemComponent {
  todo = input<Todo>();
}
