import { RoleEntity } from '../../entities';

export interface IRoleRepository {
  findByCode(code: string): Promise<RoleEntity | null>;
}