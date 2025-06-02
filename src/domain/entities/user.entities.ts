// src/domain/entities/User.ts
export class User {
    constructor(
      public name: string,
      public email: string,
      public password: string
    ) {}

    toPrimitives() {
      return {
        name: this.name,
        email: this.email,
        password: this.password
      }
    }
  }


  