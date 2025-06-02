import { User } from "../../../domain/entities/user.entities";
import { UserRepository } from "../../../domain/repositories/user.repositories";
import { UserModel } from "../../database/models/user.model";

export class UserRepositoryMongo implements UserRepository {
  async create(user: User): Promise<User> {
    const createdUser = await UserModel.create(user.toPrimitives());

    return new User(createdUser.name, createdUser.email, createdUser.password);
  }

  async findByEmail(email: string) {
    const found = await UserModel.findOne({ email });
    if (!found) return null;
    return new User(found.name, found.email, found.password);
  }

  async findById(id: string): Promise<User | null> {
    const found = await UserModel.findById(id);
    if (!found) return null;
    return new User( found.name, found.email, found.password);
  }
}
