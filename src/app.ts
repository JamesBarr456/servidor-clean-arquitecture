import { AppRoutes } from "./presentation/routes";
import { MongoDatabase } from "./data/mongo";
import { Server } from "./presentation/server";
import { envs } from "./config/plugins/envs.plugins";

(async() => {
    main();
  })();
  
  
  async function main(){

    
  //    await MongoDatabase.connect({
  //   mongoUrl: envs.MONGO_URL,
  //   dbName: envs.MONGO_DB_NAME,
  // });
    
   
  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
    routes: AppRoutes.routes,
  });
  server.start();
  }
  
  