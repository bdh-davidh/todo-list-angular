import { Component, input, inject, signal, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UsersService } from '../users-service.service';
import { TodosService } from '../todos-service.service';
import { Router, RouterLink } from '@angular/router';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-detail',
  imports: [FormsModule, RouterLink],
  templateUrl: './todo-detail.html',
  styleUrl: './todo-detail.css',
})
export class TodoDetail implements OnInit {
  private router = inject(Router);
  private usersService = inject(UsersService);
  private todos = inject(TodosService).todos;
  todoId = input.required<string>();
  users = this.usersService.users;
  updateAttempted = false;

  todoTitle = signal('');
  todoDescription = signal('');
  todoDate = signal('');
  todoUser = signal('');
  todoPriority = signal('');
  todoCategory = signal('');

  ngOnInit(): void {
    const todo = this.todos().find((todo) => todo.id === this.todoId());
    if (todo) {
      this.todoTitle.set(todo.title);
      this.todoDescription.set(todo.description);
      this.todoDate.set(todo.due_date);
      this.todoUser.set(todo.user_id);
      this.todoPriority.set(todo.priority);
      this.todoCategory.set(todo.category);
    }
  }

  inputIsInvalid(todoForm: NgForm, name: string) {
    const control = todoForm.controls[name];
    return control ? control.invalid && this.updateAttempted : false;
  }

  findAndReplaceTodoItem(todoId: string, updatedTodo: Todo) {
    return this.todos().map((todo) => {
      return todo.id !== todoId ? todo : updatedTodo;
    });
  }

  updateTodos(todoForm: NgForm) {
    console.log(this.todoTitle());
    const updatedTodo: Todo = {
      id: this.todoId(),
      user_id: todoForm.form.value.user_id,
      title: todoForm.form.value.title,
      description: todoForm.form.value.description,
      due_date: todoForm.form.value.dueDate,
      priority: todoForm.form.value.priority,
      is_completed: false,
      category: todoForm.form.value.category,
    };

    this.updateAttempted = true;

    if (todoForm.valid) {
      const newTodos = this.findAndReplaceTodoItem(this.todoId(), updatedTodo);
      this.todos.set(newTodos);
      this.updateAttempted = false;
      this.router.navigate(['']);
    }
  }
}
