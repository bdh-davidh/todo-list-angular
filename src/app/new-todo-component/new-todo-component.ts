import { Component, input, viewChild, ElementRef, effect, output, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UsersService } from '../users-service.service';
import { TodosService } from '../todos-service.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-new-todo-component',
  imports: [FormsModule],
  templateUrl: './new-todo-component.html',
  styleUrl: './new-todo-component.css',
})
export class NewTodoComponent {
  private usersService = inject(UsersService);
  private todos = inject(TodosService).todos;
  users = this.usersService.users;

  dialog = viewChild.required<ElementRef<HTMLDialogElement>>('appDialog');
  showAddTodo = input<boolean>(false);
  hideAddTodo = output<boolean>();

  constructor() {
    effect(() => {
      if (this.showAddTodo()) {
        this.dialog().nativeElement.showModal();
      }
    });
  }

  newTodo: Todo = {
    id: crypto.randomUUID(),
    title: '',
    description: '',
    due_date: '',
    user_id: '0',
    priority: 'low',
    category: 'personal',
    is_completed: false,
  };

  closeModal(todoForm: NgForm): void {
    this.dialog().nativeElement.close();
    this.hideAddTodo.emit(false);
    todoForm.reset();
  }

  handleCreateTodo(todoForm: NgForm) {
    console.log(this.newTodo);
    this.closeModal(todoForm);
  }
}
