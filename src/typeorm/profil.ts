import { PrimaryColumn, Entity, Column } from 'typeorm';
@Entity('sf_profil')
export class Profil {
  @PrimaryColumn()
  id: number;
  @Column()
  libelle: string;
  @Column('boolean')
  etat: boolean;
  
}
