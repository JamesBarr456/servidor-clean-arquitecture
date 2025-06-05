import { UserEntities } from "../entities/user.entitie";
import { UserRepository } from "../repositories/user.repository";

export class RegisterUser {
  constructor(private userRepository: UserRepository) {}

  async execute(userData: UserEntities): Promise<UserEntities> {
    const existingUser = await this.userRepository.findByEmail(userData.email);
    if (existingUser) throw new Error("User already exists");

    // Aquí podrías hashear la contraseña también si querés en esta capa
    return await this.userRepository.create(userData);
  }
}