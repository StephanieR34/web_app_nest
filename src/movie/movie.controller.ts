import { Controller, ParseIntPipe, HttpStatus, Param, Get } from '@nestjs/common';
import {  MovieService, Movie } from './movie.service';

@Controller()
export class MovieController {
  constructor(private MovieService : MovieService) { }
  movies: Movie[];



  @Get(`/movie`)
  getMovies(): Movie[] {
    return this.MovieService.getMovies();
  }
  @Get(`/movie/id/:id`)
  getById(
    @Param(`id`, new ParseIntPipe(
    {
      errorHttpStatusCode: HttpStatus.NOT_FOUND
    }
      )) id
  ) {
    return this.MovieService.getById(id);
  }
}
