import { Injectable, signal } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users = signal<User[]>([
    { id: '1', name: 'David Henson' },
    { id: '2', name: 'Sonal Henson' },
    { id: '3', name: 'Maya Henson' },
    { id: '4', name: 'Sam Henson' },
  ]);
}
