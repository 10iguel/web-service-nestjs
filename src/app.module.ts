import { Module } from '@nestjs/common';
import { WebServiceModule } from './web-service/web-service.module';

@Module({
  imports: [WebServiceModule],
})
export class AppModule {}
