import 'dotenv/config';

import * as env from 'env-var';

export const envs = {
PORT: env.get('PORT').required().asPortNumber(),
PROD: env.get('PROD').required().asBool(),
PUBLIC_PATH: env.get('PUBLIC_PATH').default('public').asString(),
      // Mongo DB
  MONGO_URL: env.get('MONGO_URL').required().asString(),
  MONGO_DB_NAME: env.get('MONGO_DB_NAME').required().asString(),
  MONGO_USER: env.get('MONGO_USER').required().asString(),
  MONGO_PASS: env.get('MONGO_PASS').required().asString()
}