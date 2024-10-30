import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfileThemesService } from './profile-themes.service';
import { CreateProfileThemeDto } from './dto/create-profile-theme.dto';
import { UpdateProfileThemeDto } from './dto/update-profile-theme.dto';

@Controller('profile-themes')
export class ProfileThemesController {
  constructor(private readonly profileThemesService: ProfileThemesService) {}

  @Post()
  create(@Body() createProfileThemeDto: CreateProfileThemeDto) {
    return this.profileThemesService.create(createProfileThemeDto);
  }

  @Get('/user/:id')
  findUserThemes(@Param('id') id: string) {
    return this.profileThemesService.findAllFromUserId(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProfileThemeDto: UpdateProfileThemeDto,
  ) {
    return this.profileThemesService.update(+id, updateProfileThemeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileThemesService.remove(+id);
  }
}
