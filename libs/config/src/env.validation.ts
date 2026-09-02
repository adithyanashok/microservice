import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'test', 'staging', 'production')
    .default('development'),

  PORT: Joi.number().port().default(3000),

  USER_SERVICE_PORT: Joi.number().port().default(3001),

  ORDER_SERVICE_PORT: Joi.number().port().default(3002),

  PAYMENT_SERVICE_PORT: Joi.number().port().default(3003),

  USER_DATABASE_URL: Joi.string().uri().required(),

  ORDER_DATABASE_URL: Joi.string().uri().required(),

  PAYMENT_DATABASE_URL: Joi.string().uri().required(),

  REDIS_URL: Joi.string().uri().required(),

  KAFKA_BROKERS: Joi.string().required(),

  KAFKA_CLIENT_ID: Joi.string().required(),

  JWT_ACCESS_SECRET: Joi.string().min(32).required(),

  JWT_REFRESH_SECRET: Joi.string().min(32).required(),
}).unknown(true);
