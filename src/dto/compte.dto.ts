import { ApiProperty } from '@nestjs/swagger';

export class CompteDto {
  @ApiProperty() id: number;
  @ApiProperty() numcompte: string;
  @ApiProperty() numcarte: string;
  @ApiProperty() secretKey: string;
  
  @ApiProperty() solde: number;
  @ApiProperty() nom: string;
  @ApiProperty() prenom: string;
  @ApiProperty() raisonSocial: string;
  @ApiProperty() addresse: string;
  @ApiProperty() email: string;
  @ApiProperty() dateNaiss: string;
  @ApiProperty() lieuNaiss: string;
  @ApiProperty() identification: number;
  @ApiProperty() numIdentification: string;
  @ApiProperty() etat: boolean;
  @ApiProperty() telephone: string;
  @ApiProperty() TypeClient: number;
  @ApiProperty() userModif: number;
  @ApiProperty() userCrea: number;
  @ApiProperty() dateCrea: string;
  @ApiProperty() currency: string;
}
