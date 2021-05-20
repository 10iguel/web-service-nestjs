import { Controller, Get } from '@nestjs/common'
import { WebServiceService } from './web-service.service'

@Controller()
export class WebServiceController {
  constructor(private webServiceService: WebServiceService) {
  }

  @Get()
  getAllInformation() {
    return this.webServiceService.getAllInfo()
  }
}
