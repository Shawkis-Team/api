import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Compte } from './compte';
import { Carte } from './carte';

@Entity('generation_ticket')
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'ref_ticket' })
  refTicket: string;
  @Column({ name: 'date_generation' })
  createdAt: Date;
  @Column({ name: 'date_use' })
  usedAt: Date;
  @Column()
  comment: string;
  @Column()
  montant: number;
  @ManyToOne(() => Compte, {})
  @JoinColumn({ name: 'fk_idcompte' })
  compte: Compte;
  @Column({ name: 'fk_idcompte' })
  compteId: number;
  @Column({ name: 'generer' })
  status: number;
  @ManyToOne(() => Carte, {})
  @JoinColumn({ name: 'fk_idcarte' })
  carte: Carte;
  @Column({ name: 'fk_idcarte' })
  carteId: number;
}
