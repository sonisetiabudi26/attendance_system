import * as Joi from 'joi';

export const loggingValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  PORT: Joi.number().default(3003),

  DATABASE_URL: Joi.string().required(),

  GRPC_LOGGING_URL: Joi.string().required(),

  RABBITMQ_URL: Joi.string().required(),
});