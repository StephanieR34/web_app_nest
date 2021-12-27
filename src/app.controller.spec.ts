import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getMovies()).toStrictEqual([{"id": 1, "name": "Star Wars: The Force Awakens", "year": 2015}, {"id": 2, "name": "Star Wars: The Last Jedi", "year": 2017}, {"id": 3, "name": "Star Wars: The Rise of Skywalker", "year": 2019}]);
    });
  });
});
