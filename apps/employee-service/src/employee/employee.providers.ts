import { Provider } from '@nestjs/common';
// import { AuthGrpcClient } from './grpc/auth.grpc.client';
import { CreateEmployeeService } from './services/create-employee.service';
import { EMPLOYEE_LOCATION_REPOSITORY, EMPLOYEE_MAPPER, EMPLOYEE_REPOSITORY, LOCATION_REPOSITORY, POSITION_REPOSITORY } from './constants/employee.constant';
import { EmployeePrismaRepository, LocationPrismaRepository, PositionPrismaRepository } from './repositories';
import { EmployeeLocationPrismaRepository } from './repositories/prisma/employee-loc-prisma.repository';
import { EmployeeLocationMapper, EmployeeMapper, LocationMapper, PositionMapper } from './mappers';
import { EmployeeGrpcMapper } from './grpc/employee.grpc.mapper';



export const employeeProviders: Provider[] = [
    CreateEmployeeService,EmployeeGrpcMapper,
    EmployeeMapper,LocationMapper,LocationMapper,EmployeeLocationMapper,PositionMapper,
    {
      provide: EMPLOYEE_REPOSITORY,
      useClass: EmployeePrismaRepository,
    },

    {
      provide: POSITION_REPOSITORY,
      useClass: PositionPrismaRepository,
    },
     {
      provide: LOCATION_REPOSITORY,
      useClass: LocationPrismaRepository,
    },
    {
      provide: EMPLOYEE_LOCATION_REPOSITORY,
      useClass: EmployeeLocationPrismaRepository,
    },
    {
      provide: EMPLOYEE_MAPPER,
      useClass: EmployeePrismaRepository,
    },     
    
]