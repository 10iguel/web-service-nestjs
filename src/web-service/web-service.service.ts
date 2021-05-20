import { Injectable } from '@nestjs/common';

@Injectable()
export class WebServiceService {
  private information = [
    {
      name: 'Miguel',
      lastName: 'Espinoza',
    },
    {
      name: 'daniela',
      lastName: 'chewbacca',
    },
    {
      name: 'Alexis',
      lastName: 'chewbacca',
    },
  ];

  getAllInfo() {
    return this.information;
  }
}
