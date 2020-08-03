import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ApplicationModule } from 'src/application/application.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfigFactory } from './config/database.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MovieModule } from './movie/movie.module';
import { NodeEnv } from './config/environment/env-node.enum';

@Module({
    imports: [ApplicationModule ,MovieModule, TypeOrmModule.forRootAsync({
        useFactory: databaseConfigFactory,
        inject: [ConfigService]
    }),
    ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: `env/${process.env.NODE_ENV}.env`,
        validationSchema: Joi.object({
            NODE_ENV: Joi.string()
              .valid(NodeEnv.DEVELOPMENT, NodeEnv.PRODUCTION)
              .required(),
          }),
    })]
})
export class InfrastructureModule {}
