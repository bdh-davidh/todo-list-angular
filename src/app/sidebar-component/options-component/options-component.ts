import { Component, output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../users-service.service';


@Component({
  selector: 'app-options-component',
  imports: [FormsModule],
  templateUrl: './options-component.html',
  styleUrl: './options-component.css',
})
export class OptionsComponent {
  private usersService = inject(UsersService);
  users = this.usersService.users;
  userSelected = output<string>();

  handleOnChange(event: Event): void {
    const target = (event.target as HTMLSelectElement).value;
    this.userSelected.emit(target);
  }
}
