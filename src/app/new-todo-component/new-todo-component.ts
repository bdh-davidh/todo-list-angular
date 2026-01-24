import { Component, input, viewChild, ElementRef, effect, output, inject } from '@angular/core';
import { UsersService } from '../users-service.service';

@Component({
  selector: 'app-new-todo-component',
  imports: [],
  templateUrl: './new-todo-component.html',
  styleUrl: './new-todo-component.css',
})
export class NewTodoComponent {
  private usersService = inject(UsersService);
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

  closeModal(): void {
    this.dialog().nativeElement.close();
    this.hideAddTodo.emit(false);
  }
}
