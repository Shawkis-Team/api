import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import { User } from './user';
import { Compte } from './compte';
import { Carte } from './carte';
import { Service } from './service';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn() id: number;
  @Column({ name: 'num_transac' }) numTransac: string;
  @Column({ name: 'date_transac' }) dateTransac: Date;
  @Column() montant: number;
  @Column({ name: 'idutilisateur' }) userId: number;
  @ManyToOne(() => User)
  @JoinColumn({ name: 'idutilisateur' })
  user: User;
  @Column({ name: 'idcompte_client' }) compteId: number;
  @ManyToOne(() => Compte)
  @JoinColumn({ name: 'idcompte_client' })
  compte: Compte;
  @ManyToOne(() => Service)
  @JoinColumn({ name: 'idservice' })
  service: Service;
 //@Column({ name: 'numcarte' }) carteId: number;
  //@Column({ name: 'id_compte' }) compteId: number;
  @Column({ name: 'idservice' }) serviceId: number;
  @Column() statut: number;
  @Column() sens: number;
  @Column() frais: number;
  @Column({ name: 'montant_ttc' }) montantTtc: number;
  @Column({ name: 'fk_agence' }) agenceId: number;
  @Column() commentaire: string;
  @Column() credit: number;
  //@Column({ name: 'date_paiement' }) datePaiement: Date;
  @Column({ name: 'codebarre' }) codeBarre: string;
  @Column() matricule: string;
}
