import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  libelle: string;
  @Column()
  description: string;
  @Column()
  prix: number;
}

export class ServiceDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  libellle: string;
  @ApiProperty()
  prix: number;
}
