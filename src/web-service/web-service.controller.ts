import { Controller, Get } from '@nestjs/common';
import { WebServiceService } from './web-service.service';

@Controller('web-service')
export class WebServiceController {
  constructor(private webServiceService: WebServiceService) {}
  @Get()
  getAllInformation() {
    return this.webServiceService.getAllInfo();
  }
}
