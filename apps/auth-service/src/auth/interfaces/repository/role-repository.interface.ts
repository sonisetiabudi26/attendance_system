import { RoleEntity } from '../../entities';

export interface IRoleRepository {
  findById(id: bigint): Promise<RoleEntity | null>;

  findByCode(code: string): Promise<RoleEntity | null>;
}