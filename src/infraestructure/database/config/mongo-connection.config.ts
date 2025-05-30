import mongoose from 'mongoose';

interface ConnectionOptions {
  mongoUrl: string;
  dbName: string;
}

export class MongoConnection {
  static async connect(options : ConnectionOptions): Promise<void> {
    const {dbName, mongoUrl} = options
    try {
      await mongoose.connect( mongoUrl, {
        dbName: dbName,
      });
      console.log('✅ MongoDB conectado correctamente');
    } catch (error) {
      console.error('❌ Error al conectar con MongoDB:');
      throw  error
    }
  }

  static async disconnect(): Promise<void> {
    await mongoose.disconnect();
    console.log('🔌 MongoDB desconectado');
  }
}
