
import express, { Application } from "express";

import { envs } from "../config/plugins/envs.plugins";
import authRouter from "../interfaces/http/routes/auth.routes";






export class Server {
  private app: Application;
  private readonly port: string | number;

  constructor() {
    this.app = express();
    this.port = envs.PORT;

    this.loadMiddlewares();
    this.loadRoutes();
  }

  private loadMiddlewares(): void {
    this.app.use(express.json());
    // Agregá middlewares aquí (CORS, logger, etc.)
  }

  private loadRoutes(): void {
    // Acá van tus rutas
    this.app.use("/api/auth", authRouter);
  }

  public async start(): Promise<void> {
  
    this.app.listen(this.port, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${this.port}`);
    });
  }
}
