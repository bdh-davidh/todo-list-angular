import { Component, inject } from '@angular/core';
import { UsersService } from '../users-service.service';



@Component({
  selector: 'app-options-component',
  imports: [],
  templateUrl: './options-component.html',
  styleUrl: './options-component.css',
})
export class OptionsComponent {
  users = inject(UsersService).users;
}
