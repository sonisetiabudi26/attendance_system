import { Inject, Injectable } from "@nestjs/common";
import { MASTER_STATUS_REPOSITORY, REFRESH_TOKEN_REPOSITORY, ROLE_REPOSITORY, USER_REPOSITORY } from "../constants";
import type { IMasterStatusRepository, IRefreshTokenRepository, IRoleRepository, IUserRepository } from "../repositories/interface";
import { JwtService, PasswordService } from "../security/services";
import { PrismaService } from "../../database/prisma.service";
import { LoginContract } from "../contracts";
import { LoginResponseDto } from "../dto/response/login-resp.dto";
import { InactiveUserException, InvalidCredentialException, RoleNotFoundException, UserStatusNotFoundException } from "../exceptions";
import { LoginResponseMapper } from "../mappers/login-resp.mapper";

@Injectable()
export class LoginService {
    
    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepository: IUserRepository,

        @Inject(REFRESH_TOKEN_REPOSITORY)
        private readonly refreshTokenRepository: IRefreshTokenRepository,

        @Inject(ROLE_REPOSITORY)
        private readonly roleRepository: IRoleRepository,

        @Inject(MASTER_STATUS_REPOSITORY)
        private readonly masterStatusRepository: IMasterStatusRepository,

        private readonly passwordService: PasswordService,

        private readonly jwtTokenService: JwtService,

        private readonly prisma: PrismaService,
        private readonly loginResponseMapper: LoginResponseMapper
    ) { console.log('LoginResponseMapper =>', loginResponseMapper); }

    async execute(
        contract: LoginContract,
    ): Promise<LoginResponseDto> {
        const user =
            await this.userRepository.findByEmail(
                this.prisma,
                contract.email,
            );
     
        if (!user) {
            throw new InvalidCredentialException();
        }
        
        const status =
            await this.masterStatusRepository.findById(
                this.prisma,
                user.statusId,
            );

        if (!status) {
            throw new UserStatusNotFoundException();
        }

        if (status.code !== 'ACTIVE') {
            throw new InactiveUserException();
        }


        const role =
            await this.roleRepository.findById(this.prisma,user.roleId);

        if (!role) {
            throw new RoleNotFoundException();
        }
        const valid =
            await this.passwordService.verify(
                user.passwordHash,
                contract.password,
            );
           
        if (!valid) {
            throw new InvalidCredentialException();
        }

        
        const accessToken =
            await this.jwtTokenService.generateAccessToken({
                sub: user.id.toString(),
                username: user.username,
                role: role.code,
            });
 
       
        const refreshToken =
            await this.jwtTokenService.generateRefreshToken({
                sub: user.id.toString(),
            });

       
        const refreshHash =
            await this.passwordService.hash(
                refreshToken,
            );

       await this.prisma.$transaction(
            async (tx) => {

                await this.refreshTokenRepository.upsert(
                    tx,
                    {
                        userId: user.id,
                        tokenHash: refreshHash,
                        deviceName: contract.deviceName,
                        deviceType: contract.deviceType,
                        ipAddress: contract.ipAddress,
                        userAgent: contract.userAgent,
                        expiresAt:
                            this.jwtTokenService.getRefreshExpiredDate(),
                    },
                );

                await this.userRepository.update(
                    tx,
                    user.id,
                    {
                        lastLoginAt: new Date(),
                    },
                );
            });
            
        return this.loginResponseMapper.toDto(
            user,
            accessToken,
            refreshToken,
            900,
        );
        
    }
}