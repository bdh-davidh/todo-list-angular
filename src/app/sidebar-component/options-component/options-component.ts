import { Component, output, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../users-service.service';


@Component({
  selector: 'app-options-component',
  imports: [FormsModule],
  templateUrl: './options-component.html',
  styleUrl: './options-component.css',
})
export class OptionsComponent {
  users = inject(UsersService).users;
  currentUser = signal<number>(0);
  userSelected = output<number>();

  handleOnChange(event: Event): void {
    const target = Number((event.target as HTMLSelectElement).value);
    this.currentUser.set(target);
    this.userSelected.emit(target);
  }
}
