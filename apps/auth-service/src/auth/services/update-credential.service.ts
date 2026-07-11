import { Inject, Injectable } from "@nestjs/common";
import { USER_REPOSITORY } from "../constants";
import type { IUserRepository } from "../repositories/interface";
import { PrismaService } from "../../database/prisma.service";
import { PasswordService } from "../security";
import { UpdateCredentialContract } from "../contracts/update-credential.contract";
import { UserEntity } from "../entities";
import { UserNotFoundException } from "../exceptions/user-notfound.exception";
import { EmailAlreadyExistsException } from "../exceptions";

@Injectable()
export class UpdateCredentialService {

    constructor(

        @Inject(USER_REPOSITORY)
        private readonly userRepository: IUserRepository,

        private readonly prisma: PrismaService,

        private readonly passwordService: PasswordService,

    ) { }

    async execute(
        contract: UpdateCredentialContract,
    ): Promise<UserEntity> {

        const user =
            await this.userRepository.findById(
                this.prisma,
                contract.userId,
            );

        if (!user) {
            throw new UserNotFoundException();
        }

        let email = user.email;

        if (contract.email.trim() !== ''||
            contract.email &&
            contract.email !== user.email
        ) {

            const exists =
                await this.userRepository.findByEmail(
                    this.prisma,
                    contract.email,
                );

            if (exists) {
                throw new EmailAlreadyExistsException();
            }

            email = contract.email;
        }

        let passwordHash: string | undefined;

       if (contract.password.trim() !== '') {

            passwordHash =
                await this.passwordService.hash(
                    contract.password,
                );

        }

        return this.userRepository.updateCredential(
            this.prisma,
            user.id,
            email,
            passwordHash,
        );

    }

}