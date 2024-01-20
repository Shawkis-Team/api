import { ApiProperty } from '@nestjs/swagger';

export class DeviceDto {
  @ApiProperty() id: number;
  @ApiProperty() uid: string;
  @ApiProperty() model: string;
  @ApiProperty() manifacture: string;
  @ApiProperty() platform: string;
}
