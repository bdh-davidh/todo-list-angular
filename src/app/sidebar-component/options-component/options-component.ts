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
  userSelected = output<number>();

  handleOnChange(event: Event): void {
    const target = Number((event.target as HTMLSelectElement).value);
    this.userSelected.emit(target);
  }
}
