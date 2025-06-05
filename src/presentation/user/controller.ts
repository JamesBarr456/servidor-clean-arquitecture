import { Request, Response } from "express";

import { MongoUserRepository } from "../../infraestructure/datasource/repositories/mongo-user-repository";
import { RegisterUser } from "../../domain/use-cases/register-user.usecases";

// Es el encargado de dar respuestas al cliente
export class AuthController {

constructor() {}
  // Aquí se pueden definir los métodos que manejarán las solicitudes
  // Por ejemplo, un método para manejar el inicio de sesión
  login(req: Request, res:Response) {
    // Lógica para manejar el inicio de sesión
    res.send('Login successful');
  }

  // Método para manejar el registro de un nuevo usuario
  async register(req: Request, res:Response) {
  const userRepository = new MongoUserRepository();
    const registerUser = new RegisterUser(userRepository);

    try {
      const user = await registerUser.execute(req.body);
      res.status(201).json({ message: "User registered", user });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  // Método para validar el correo electrónico
  validateEmail(req: Request, res:Response) {
    const token = req.params.token;
    // Lógica para validar el token de correo electrónico
    res.send(`Email validation successful for token: ${token}`);
  }




}