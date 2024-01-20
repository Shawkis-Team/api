import { ApiProperty } from '@nestjs/swagger';

export class CarteDto {
  @ApiProperty() id: number;
  @ApiProperty() numcarte: string;
  @ApiProperty() numserie: number;

  @ApiProperty() etat: boolean;
  @ApiProperty() idcompte: number;
  @ApiProperty() typeCarte: number;
  @ApiProperty() numTel: string;
  @ApiProperty() prenomCarte: string;
  @ApiProperty() nomCarte: string;
  @ApiProperty() mailCarte: string;
  @ApiProperty() solde: number;
  @ApiProperty() dateExpiration: string;
  @ApiProperty() cleSecrete: string;
  @ApiProperty() codePin: string;
  @ApiProperty() dataActivation: string;
}
