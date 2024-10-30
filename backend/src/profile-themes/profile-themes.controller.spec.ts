import { Test, TestingModule } from '@nestjs/testing';
import { ProfileThemesController } from './profile-themes.controller';
import { ProfileThemesService } from './profile-themes.service';

describe('ProfileThemesController', () => {
  let controller: ProfileThemesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileThemesController],
      providers: [ProfileThemesService],
    }).compile();

    controller = module.get<ProfileThemesController>(ProfileThemesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
