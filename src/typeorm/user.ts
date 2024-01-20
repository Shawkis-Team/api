import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Profil } from './profil';

@Entity('sf_user')
export class User {
  @PrimaryColumn()
  id: number;
  @Column()
  prenom: string;
  @Column()
  nom: string;
  @Column()
  agence: number;
  @Column()
  mobile: string;
  @Column()
  email: string;
  @Column({ name: 'code_pin' })
  codePin: number;
  @Column({ name: 'sf_profil_id' })
  profilId: number;
  @ManyToOne(() => Profil)
  @JoinColumn({ name: 'sf_profil_id' })
  profil: Profil;
}
