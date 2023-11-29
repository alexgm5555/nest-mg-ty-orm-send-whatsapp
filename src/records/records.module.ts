import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { RecordsService } from './records.service';
import { RecordsResolver } from './records.resolver';
import { Record } from './entities/record.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Record])
  ],
  providers: [RecordsResolver, RecordsService],
})
export class RecordsModule {}
