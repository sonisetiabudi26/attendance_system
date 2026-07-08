import * as Joi from 'joi';

export const attendanceValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  PORT: Joi.number().default(3002),

  DATABASE_URL: Joi.string().required(),

  GRPC_ATTENDANCE_URL: Joi.string().required(),

  RABBITMQ_URL: Joi.string().required(),
});