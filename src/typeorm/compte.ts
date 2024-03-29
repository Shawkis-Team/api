import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Carte } from './carte';
@Entity()
export class Compte {
  @PrimaryGeneratedColumn() id: number;
  @Column({ name: 'numcompte' }) numcompte: string;
  //@Column({ name: 'numcarte' }) numcarte: string;
  @Column() solde: number;
  @Column() nom: string;
  @Column({ name: 'prenoms' }) prenom: string;
  @Column({ name: 'raison_sociale' }) raisonSocial: string;
  @Column() adresse: string;
  @Column() responsable: string;
  @Column() email: string;
  @Column() dateNaiss: string;
  @Column() lieuNaiss: string;
  @Column() identification: number;
  @Column({ name: 'numidentification' }) numIdentification: string;
  @Column() etat: boolean;
  @Column() telephone: string;
  @Column({ name: 'type_client' }) TypeClient: number;
  @Column({ name: 'user_modif' }) userModif: number;
  @Column({ name: 'user_crea' }) userCrea: number;
  @Column({ name: 'date_crea' }) dateCrea: string;
  @Column({ name: 'cle_secrete' }) secretKey: string;
  @Column() currency: string;
  @OneToMany(() => Carte, (carte) => carte.compte)
  carte: Carte[];
}
