import { Injectable } from '@nestjs/common';
import { User } from './user.model';


@Injectable()
export class UserService {
    private users: User[] = [];

  createUser(user: User): User {
    // Implemente a lógica para criar um usuário
    this.users.push(user);
    return user;
  }

  getAllUsers(): User[] {
    // Retorna todos os usuários
    return this.users;
  }
}
