import {RefreshTokenEntity} from '../../entities';
import {CreateRefreshTokenContract} from '../../contracts';
export interface IRefreshTokenRepository {
  findByUserId(
    userId: bigint,
  ): Promise<RefreshTokenEntity | null>;

  upsert(
    model: CreateRefreshTokenContract,
  ): Promise<RefreshTokenEntity>;

  deleteByUserId(
    userId: bigint,
  ): Promise<void>;
}