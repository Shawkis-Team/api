import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from 'src/module/users/dto/createUser.dto';
import { CompteDto } from './compte.dto';
import { CarteDto } from './carte.dto';

export class TransactionDto {
  @ApiProperty() id: number;
  @ApiProperty() numTransac: string;
  @ApiProperty() dateTransac: Date;
  @ApiProperty() montant: number;
  @ApiProperty() userId: number;
  @ApiProperty() compteId: number;
  @ApiProperty() numcarte: number;
  @ApiProperty() serviceId: number;
  @ApiProperty() status: number;
  @ApiProperty() sens: number;
  @ApiProperty() frais: number;
  @ApiProperty() montantTtc: number;
  @ApiProperty() agenceId: number;
  @ApiProperty() commentaire: string;
  @ApiProperty() credit: number;
  //@ApiProperty() datePaiement: Date;
  @ApiProperty() codeBarre: string;
  @ApiProperty() matricule: string;
}
