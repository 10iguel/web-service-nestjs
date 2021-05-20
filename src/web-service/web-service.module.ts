import { Module } from '@nestjs/common';
import { WebServiceController } from './web-service.controller';
import { WebServiceService } from './web-service.service';

@Module({
  controllers: [WebServiceController],
  providers: [WebServiceService],
})
export class WebServiceModule {}
