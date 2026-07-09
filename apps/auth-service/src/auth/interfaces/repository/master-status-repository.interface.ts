import { MasterStatusEntity } from '../../entities';

export interface IMasterStatusRepository {
  findById(id: bigint): Promise<MasterStatusEntity | null>;

  findDefault(): Promise<MasterStatusEntity | null>;
}