import { User } from "../../domain/entities/user.entities";
import { UserRepository } from "../../domain/repositories/user.repositories";


export class RegisterUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(data: { name: string; email: string; password: string }) {
    const existing = await this.userRepository.findByEmail(data.email);
    if (existing) throw new Error("Email already in use");

    const user = new User(data.name, data.email, data.password);
    return await this.userRepository.create(user);
  }
}