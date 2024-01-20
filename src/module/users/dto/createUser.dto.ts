import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  id: number;
  @ApiProperty()
  prenom: string;
  @ApiProperty()
  nom: string;
  @ApiProperty()
  mobile: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  codePin: number;
  @ApiProperty()
  profilId: number;
}
