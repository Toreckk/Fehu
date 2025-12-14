import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from '@repo/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user')
  getUser(): User {
     // Demonstrating usage of shared types
     return {
         id: '1',
         email: 'backend@example.com',
         name: 'Backend User'
     };
  }
}
