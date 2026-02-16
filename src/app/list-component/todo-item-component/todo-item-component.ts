import { Component, input } from '@angular/core';
import { Todo } from '../../todo.model';
import { DatePipe } from '@angular/common';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-todo-item-component',
  imports: [DatePipe, RouterLink],
  templateUrl: './todo-item-component.html',
  styleUrl: './todo-item-component.css',
})
export class TodoItemComponent {
  todo = input<Todo>();
}
