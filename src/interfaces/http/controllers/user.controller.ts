import { Request, Response } from "express";
import { UserRepositoryMongo } from "../../../infraestructure/repositories/mongo/user-mongo.repositories";
import { RegisterUserUseCase } from "../../../application/use-cases/register-user.use-cases";

export class UserController {
  private readonly registerUserUseCase: RegisterUserUseCase;

  constructor() {
    const userRepository = new UserRepositoryMongo()
    this.registerUserUseCase = new RegisterUserUseCase(userRepository);
  }
  async register(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;

      const user = await this.registerUserUseCase.execute({ name, email, password });

      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
