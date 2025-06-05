import { AuthRoutes } from './user/routes';
import { Router } from 'express';

export class AppRoutes {


  static get routes(): Router {

    const router = Router();
   
    router.use("/api/users", AuthRoutes.routes);
    



    return router;
  }


}

