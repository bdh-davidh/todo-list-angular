import { Routes } from '@angular/router';
import { TodoDetail } from './todo-detail/todo-detail';
import { MainComponent } from './main/main';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'todos/:todoId',
    component: TodoDetail,
  },
];
