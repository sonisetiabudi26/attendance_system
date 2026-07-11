import {
  Inject,
  Injectable,
} from '@nestjs/common';

import { PrismaService } from '../../database/prisma.service';

import {
  USER_REPOSITORY,
  ROLE_REPOSITORY,
  MASTER_STATUS_REPOSITORY,
} from '../constants';

import type {
  IUserRepository,
  IRoleRepository,
  IMasterStatusRepository,
} from '../repositories/interface';

import { PasswordService } from '../security/services';

import { CreateUserContract } from '../contracts';

import {
  EmailAlreadyExistsException,
  RoleNotFoundException,
  UserStatusNotFoundException,
} from '../exceptions';

import { UserEntity } from '../entities';

@Injectable()
export class CreateUserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,

    @Inject(ROLE_REPOSITORY)
    private readonly roleRepository: IRoleRepository,

    @Inject(MASTER_STATUS_REPOSITORY)
    private readonly statusRepository: IMasterStatusRepository,

    private readonly passwordService: PasswordService,

    private readonly prisma: PrismaService,
  ) {}

  async execute(
    contract: CreateUserContract,
  ): Promise<UserEntity> {
    
    const emailExists =
      await this.userRepository.existsByEmail(
        this.prisma,
        contract.email,
      );

    if (emailExists) {
      throw new EmailAlreadyExistsException();
    }

    const role =
      await this.roleRepository.findByCode(
        this.prisma,
        'EMPLOYEE'
      );

    if (!role) {
      throw new RoleNotFoundException();
    }

    const status =
      await this.statusRepository.findByCode(
        this.prisma,
        'ACTIVE',
      );

    if (!status) {
      throw new UserStatusNotFoundException();
    }

    const passwordHash =
      await this.passwordService.hash(
        contract.password,
      );

    return this.prisma.$transaction(async (tx) => {
      return this.userRepository.create(
        tx,
        {
         username: contract.username,
        email: contract.email,
        passwordHash,
        roleId: role.id,
        statusId: status.id,
        },
      );
    });
  }
}