import { Injectable } from '@nestjs/common';
import { option } from 'fp-ts';

@Injectable()
export class AppService {
  getHello(): string {
    // Demonstrating usage of fp-ts
    const someValue = option.some('Hello World!');
    return option.getOrElse(() => 'Goodbye World')(someValue);
  }
}
