import { Controller, ParseIntPipe, HttpStatus, Param, Get } from '@nestjs/common';
import { AppService, Movie } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMovies(): Movie[] {
    return this.appService.getMovies();
  }
  @Get(`/id/:id`)
  getById(
    @Param(`id`, new ParseIntPipe(
    {
      errorHttpStatusCode: HttpStatus.NOT_FOUND
    }
      )) id
  ) {
    return this.appService.getById(id);
  }
}
