import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('uuid')
  uuid: string;
  @Column()
  model: string;
  @Column()
  manifacture: string;
  @Column()
  platform: string;
  @Column('boolean')
  etat: boolean;
}
