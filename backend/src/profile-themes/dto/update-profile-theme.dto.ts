import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileThemeDto } from './create-profile-theme.dto';

export class UpdateProfileThemeDto extends PartialType(CreateProfileThemeDto) {}
