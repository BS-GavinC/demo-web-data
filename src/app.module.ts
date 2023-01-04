
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { WikiModule } from './wiki/wiki.module';

@Module({
  imports: [HelloModule, WikiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
