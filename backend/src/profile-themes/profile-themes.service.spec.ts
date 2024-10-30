import { Test, TestingModule } from '@nestjs/testing';
import { ProfileThemesService } from './profile-themes.service';

describe('ProfileThemesService', () => {
  let service: ProfileThemesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileThemesService],
    }).compile();

    service = module.get<ProfileThemesService>(ProfileThemesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
