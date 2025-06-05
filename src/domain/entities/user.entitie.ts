

export class UserEntities {
  constructor(
    public id: string,
    public first_name: string,
    public email: string,
    public password: string,
    public emailValidated: boolean,
    public img?: string,
    public role: string[],
    public created_at?: Date,
    public updated_at?: Date
  ) {

  }
  
  isAdmin(): boolean {
    return this.role.includes('admin');
  }

  isValidated(): boolean {
    return this.emailValidated;
  }
}