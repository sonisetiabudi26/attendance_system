import * as Joi from 'joi';

export const validationSchema = Joi.object({
    APP_NAME: Joi.string().required(),

    NODE_ENV: Joi.string()
        .valid('development', 'production', 'test')
        .default('development'),

    PORT: Joi.number().required(),

    JWT_SECRET: Joi.string().required(),
    JWT_EXPIRES_IN: Joi.string().required(),
    JWT_REFRESH_EXPIRES_IN: Joi.string().required(),

    DATABASE_URL: Joi.string().required(),

    RABBITMQ_URI: Joi.string().required(),

    GRPC_AUTH_URL: Joi.string().required(),
    GRPC_EMPLOYEE_URL: Joi.string().required(),
    GRPC_ATTENDANCE_URL: Joi.string().required(),
    GRPC_NOTIFICATION_URL: Joi.string().required(),
});