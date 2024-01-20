import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Compte } from './compte';

@Entity('carte')
export class Carte {
  @PrimaryColumn()
  id: number;
  @Column({name:'numcarte'})
  numcarte: string;
  @Column()
  numserie: number;

  @Column('boolean')
  etat: boolean;
  @Column()
  idcompte: number;
  @ManyToOne(() => Compte)
  @JoinColumn({ name: 'idcompte' })
  compte: Compte;
  @Column({ name: 'type_carte' })
  typeCarte: number;
  @Column({ name: 'num_tel' })
  numTel: string;
  @Column({ name: 'prenom_carte' })
  prenomCarte: string;
  @Column({ name: 'nom_carte' })
  nomCarte: string;
  @Column({ name: 'mail_carte' })
  mailCarte: string;
 
  @Column()
  solde: number;
  @Column()
  statut: number;
  @Column({ name: 'date_expiration' })
  dateExpiration: string;
  @Column({ name: 'cle_secrete' })
  cleSecrete: string;
  @Column({ name: 'code_pin' })
  codePin: string;
  @Column({ name: 'date_activation' })
  dataActivation: string;
}
