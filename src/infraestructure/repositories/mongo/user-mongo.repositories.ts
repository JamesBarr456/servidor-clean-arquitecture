import { User } from "../../../domain/entities/user.entities";
import { UserRepository } from "../../../domain/repositories/user.repositories";
import { UserModel } from "../../database/models/user.model";

export class UserRepositoryMongo implements UserRepository {
  async create(user: User): Promise<User> {
    const createdUser = await UserModel.create({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    return new User(createdUser._id.toString(), createdUser.name, createdUser.email, createdUser.password);
  }

  async findByEmail(email: string): Promise<User | null> {
    const userDoc = await UserModel.findOne({ email });
    if (!userDoc) return null;
    return new User(userDoc._id.toString(), userDoc.name, userDoc.email, userDoc.password);
  }

  async findById(id: string): Promise<User | null> {
    const userDoc = await UserModel.findById(id);
    if (!userDoc) return null;
    return new User(userDoc._id.toString(), userDoc.name, userDoc.email, userDoc.password);
  }
}
