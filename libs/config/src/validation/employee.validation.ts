import * as Joi from 'joi';

export const employeeValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  PORT: Joi.number().default(3001),

  DATABASE_URL: Joi.string().required(),

  GRPC_EMPLOYEE_URL: Joi.string().required(),

  RABBITMQ_URL: Joi.string().required(),
});