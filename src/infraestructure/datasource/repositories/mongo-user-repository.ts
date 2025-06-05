import { UserEntities } from "../../../domain/entities/user.entitie";
import { UserModel } from "../../../data/mongo";
import { UserRepository } from "../../../domain/repositories/user.repository";

export class MongoUserRepository implements UserRepository {
  async create(user: UserEntities): Promise<UserEntities> {
    const createdUser = new UserModel(user);
    const savedUser = await createdUser.save();
    return {
      id: savedUser._id.toString(),
      first_name: savedUser.first_name,
      email: savedUser.email,
      password: savedUser.password,
      role: savedUser.role,
      emailValidated: savedUser.emailValidated,
    img: savedUser.avatar,  
        created_at: savedUser.created_at,
        updated_at: savedUser.updated_at,


    };
  }

  async findByEmail(email: string): Promise<UserEntities | null> {
    const user = await UserModel.findOne({ email });
    if (!user) return null;
    return {
      id: user._id.toString(),
      first_name: user.first_name,
      email: user.email,
      password: user.password,
            role: user.role,
      emailValidated: user.emailValidated,
    img: user.avatar,  
        created_at: user.created_at,
        updated_at: user.updated_at,

    };
  }
}