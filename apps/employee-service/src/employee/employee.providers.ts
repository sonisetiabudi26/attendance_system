import { Provider } from '@nestjs/common';
import { AuthGrpcClient } from './grpc/auth.grpc.client';
import { CreateEmployeeService } from './services/create-employee.service';
import { EMPLOYEE_LOCATION_MAPPER, EMPLOYEE_LOCATION_REPOSITORY, EMPLOYEE_MAPPER, EMPLOYEE_REPOSITORY, LOCATION_MAPPER, LOCATION_REPOSITORY, MASTER_POSITION_MAPPER, POSITION_REPOSITORY } from './constants/employee.constant';
import { EmployeePrismaRepository, LocationPrismaRepository, PositionPrismaRepository } from './repositories';
import { EmployeeLocationPrismaRepository } from './repositories/prisma/employee-loc-prisma.repository';
import { EmployeeLocationMapper, EmployeeMapper, LocationMapper, MasterPositionMapper } from './mappers';
import { EmployeeGrpcMapper } from './grpc/employee.grpc.mapper';
import { UpdateEmployeeService } from './services/update-employee.service';
import { GetEmployeeService } from './services/get-employee.service';



export const employeeProviders: Provider[] = [
    CreateEmployeeService,EmployeeGrpcMapper,AuthGrpcClient,UpdateEmployeeService,
    LocationMapper,EmployeeLocationMapper,MasterPositionMapper,EmployeeMapper,GetEmployeeService,
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
      provide: EMPLOYEE_LOCATION_MAPPER,
      useClass: EmployeeLocationMapper,
    },     
     {
      provide: LOCATION_MAPPER, 
      useClass: LocationMapper,
    }, {
      provide: MASTER_POSITION_MAPPER,
      useClass: MasterPositionMapper,
    },   {
      provide: EMPLOYEE_MAPPER,
      useClass: EmployeeMapper,
    },

    
    
]