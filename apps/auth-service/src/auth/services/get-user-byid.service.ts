import { Inject, Injectable } from "@nestjs/common";
import { USER_REPOSITORY } from "../constants";
import type{ IUserRepository } from "../repositories/interface";
import { PrismaService } from '../../database/prisma.service';
import {
    GetUsersByIdsRequest,
    GetUsersByIdsResponse,
} from "@attendance/proto/generated/auth";
// import {GetUsersByIdsRequest,GetUsersByIdsResponse} from '@attendance/proto/generated/auth';
@Injectable()
export class GetUsersByIdsService {

    constructor(

        @Inject(USER_REPOSITORY)
        private readonly userRepository: IUserRepository,

        private readonly prisma: PrismaService,

    ) {}

    async execute(
        request: GetUsersByIdsRequest,
    ): Promise<GetUsersByIdsResponse> {

        const ids =
            request.userIds.map(id =>
                BigInt(id),
            );

        const users =
            await this.userRepository.findByIds(
                this.prisma,
                ids,
            );

        return {

            users: users.map(user => ({

                userId:
                    user.id.toString(),

                email:
                    user.email,
                role:
                    user.role.code,
                status:
                    user.status.code,

            })),

        };

    }

}