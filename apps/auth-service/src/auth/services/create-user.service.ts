// import { Inject, Injectable } from "@nestjs/common";
// import type { IRoleRepository, IUserRepository } from "../interfaces/repository";
// import { ROLE_REPOSITORY, USER_REPOSITORY } from "../constants";
// import { PasswordService } from "../security";
// import { PrismaService } from "../../database/prisma.service";
// import { UserEntity } from "../entities";
// import { CreateUserContract } from "../contracts";
// import { RoleNotFoundException } from "../exceptions";

// @Injectable()
// export class CreateUserService {
//   constructor(
//     @Inject(USER_REPOSITORY)
//     private readonly userRepository: IUserRepository,

//     @Inject(ROLE_REPOSITORY)
//     private readonly roleRepository: IRoleRepository,

//     private readonly passwordService: PasswordService,

//     private readonly prisma: PrismaService,
//   ) {}

//   async execute(
//     input: CreateUserContract,
//   ): Promise<UserEntity> {

//     const usernameExists =
//       await this.userRepository.existsByUsername(
//         this.prisma,
//         input.username,
//       );

//     if (usernameExists) {
//     //   throw new UsernameAlreadyExistsException();
//     }

//     const emailExists =
//       await this.userRepository.existsByEmail(
//         this.prisma,
//         input.email,
//       );

//     if (emailExists) {
//     //   throw new EmailAlreadyExistsException();
//     }

//     const role =
//       await this.roleRepository.findByCode(
//         this.prisma,
//         input.roleId,
//       );

//     if (!role) {
//       throw new RoleNotFoundException();
//     }

//     const passwordHash =
//       await this.passwordService.hash(
//         input.passwordHash,
//       );

//     return this.prisma.$transaction(async (tx) => {

//       return this.userRepository.create(tx, {
//         username: input.username,
//         email: input.email,
//         passwordHash,
//         roleId: role.id,
//         statusId: BigInt(1),
//       });

//     });
//   }
// }