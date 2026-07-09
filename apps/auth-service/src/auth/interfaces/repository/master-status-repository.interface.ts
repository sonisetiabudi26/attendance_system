import { MasterStatusEntity } from '../../entities';

export interface IMasterStatusRepository {
  findDefault(): Promise<MasterStatusEntity | null>;
}