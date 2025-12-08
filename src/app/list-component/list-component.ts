import { Component, inject } from '@angular/core';
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
}
