import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProfileThemeDto {
  @IsNumber()
  userId: number;

  @IsString()
  @IsOptional()
  appColor?: string;

  @IsString()
  @IsOptional()
  appLogoUrl?: string;
}
