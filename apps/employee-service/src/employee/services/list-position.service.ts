import { ListPositionResponse } from "@attendance/proto/generated/employee";
import { Inject, Injectable } from "@nestjs/common";
import { MASTER_POSITION_MAPPER, POSITION_REPOSITORY } from "../constants/employee.constant";
import type{ IPositionRepository } from "../repositories";
import { PrismaService } from "../../database";
import { MasterPositionMapper } from "../mappers/position.mapper";

@Injectable()
export class ListPositionService {

    constructor(

        @Inject(POSITION_REPOSITORY)
        private readonly positionRepository: IPositionRepository,

        @Inject(MASTER_POSITION_MAPPER)
        private readonly mapper: MasterPositionMapper,

        private readonly prisma: PrismaService,

    ) {}

    async execute(): Promise<ListPositionResponse> {

        const positions =
            await this.positionRepository.findAll(
                this.prisma,
            );

        return {

            positions:
                positions.map(position =>
                    this.mapper.toResponse(position),
                ),

        };

    }

}