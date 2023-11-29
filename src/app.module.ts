import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { RecordsModule } from './records/records.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // autoSchemaFile: true,
      playground: !(process.env.PLAY_GROUND ==='false'),
      plugins: [
        ApolloServerPluginLandingPageLocalDefault({
          footer: !(process.env.PLUGINS_FOOTER === 'false')
        }),
      ]
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DB_MONGO,
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    }),
    RecordsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
