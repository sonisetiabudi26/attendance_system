export interface IPasswordService {
  hash(password: string): Promise<string>;

  verify(
    password: string,
    hash: string,
  ): Promise<boolean>;

   compare(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}