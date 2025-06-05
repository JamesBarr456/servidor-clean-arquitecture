import { UserEntities } from "../entities/user.entitie";

export interface UserRepository {
  create(user: UserEntities): Promise<UserEntities>;
  findByEmail(email: string): Promise<UserEntities | null>;
}