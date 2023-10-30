import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { Database } from './database';

@Module({
  providers: [DatabaseService, Database]
})
export class DatabaseModule {}
