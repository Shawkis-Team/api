import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompteDto } from 'src/dto/compte.dto';
import { ExceptionCode } from 'src/exeption_code';
import { Carte, Compte } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CompteService {
  constructor(
    @InjectRepository(Compte) private repo: Repository<Compte>,
    @InjectRepository(Carte) private reposCarte: Repository<Carte>,
  ) {}
  getS() {
    return this.repo.find({ relations: { carte: true } });
  }
  get(id: number) {
    return this.repo.findOne({ where: { id } });
  }
  async getByNumCompte(numCompte: string) {
    const cpt = await this.repo.findOne({ where: { numcompte: numCompte } });
    if (!cpt) throw new HttpException(ExceptionCode.NOT_FOUND, 404);
    return cpt;
  }
  async create(compte: CompteDto) {
    try {
      return await this.repo.save(this.repo.create(compte));
    } catch (error) {
      throw new HttpException({ ...error }, error.code ?? 500);
    }
  }
  async update(body: CompteDto) {
    const carte = await this.reposCarte.findOne({
      where: { numcarte: body.numcarte },
    });
    const { numcarte, ...rest } = body;
    console.log('--------------------carte-------------------', carte);
    if (!carte) throw new HttpException(ExceptionCode.NOT_FOUND, 404);
    if (carte.uid !== null)
      throw new HttpException(ExceptionCode.CARD_ALREADY_ENROLLED, 404);
    // const up = await this.repo.update({ id: body.id }, rest);
    carte.idcompte = body.id;
    carte.statut = 2;
    carte.uid = body.secretKey;
    return this.reposCarte
      .save(carte)
      .then((value) => {
        return ExceptionCode.SUCCEEDED;
      })
      .catch((err) => {
        throw new HttpException(ExceptionCode.NOT_FOUND, 404);
      });
    // if (up.affected > 0) return ;
  }
}
