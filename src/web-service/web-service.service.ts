import { Injectable } from '@nestjs/common'

@Injectable()
export class WebServiceService {
  private information = [
    {
      name: 'Robert',
      lastName: 'Stan'
    },
    {
      name: 'Iron',
      lastName: 'Man'
    },
    {
      name: 'Han',
      lastName: 'chewbacca'
    }
  ]

  getAllInfo() {
    return this.information
  }
}
