import { Injectable } from "@nestjs/common";
import { MasterPosition } from "../../../prisma/generated/client";
import { Prisma } from "../../../prisma/generated/client";
import { PositionEntity } from "../entites/position.entity";
import { PositionResponse } from "@attendance/proto/generated/employee";

@Injectable()
export class MasterPositionMapper {
  toDomain(position: MasterPosition): PositionEntity {
    return new PositionEntity(
      BigInt(position.id),
      position.code,
      position.name,
      position.createdBy ? BigInt(position.createdBy) : null,
      position.updatedBy ? BigInt(position.updatedBy) : null,
      position.createdAt,
      position.updatedAt
    );
  }

  toPersistence(entity: PositionEntity): Partial<MasterPosition> {
    return {
      code: entity.code,
      name: entity.name,
      createdBy: entity.createdBy,
      updatedBy: entity.updatedBy,
    };
  }

  toCreatePersistence(entity: PositionEntity): Prisma.MasterPositionUncheckedCreateInput {
    return {
      code: entity.code,
      name: entity.name,
      createdBy: entity.createdBy,
      updatedBy: entity.updatedBy,
    };

  }

  toUpdatePersistence(entity: PositionEntity): Prisma.MasterPositionUncheckedUpdateInput {
  return {
    code: entity.code,
    name: entity.name,
    createdBy: entity.createdBy,
    updatedBy: entity.updatedBy,
  };
}
  toResponse(entity: PositionEntity): PositionResponse {
        return {
            id: entity.id.toString(),
            code: entity.code,
            name: entity.name,
        };

    }
}
