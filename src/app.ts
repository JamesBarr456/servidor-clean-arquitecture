import { Server } from "./application/server";
import { envs } from "./config/plugins/envs.plugins";
import { MongoConnection } from "./infraestructure/database/config/mongo-connection.config";


(async() => {
    main();
  })();
  
  
  async function main(){
    const server = new Server()
    
    await MongoConnection.connect({
      mongoUrl: envs.MONGO_URL,
      dbName: envs.MONGO_DB_NAME,
    })
    
    server.start();
  }
  
  