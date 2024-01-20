import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarteDto } from 'src/dto/carte.dto';
import { ExceptionCode } from 'src/exeption_code';
import { Carte } from 'src/typeorm';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class CarteServie {
  constructor(@InjectRepository(Carte) private carte: Repository<Carte>) {}
  getCartes() {
    return this.carte.find();
  }
  getCarte(id: number) {
    return this.carte.findOne({ where: { id } });
  }
  async getCarteByTag(tag: string) {
    const carte = await this.carte.findOne({
      where: { cleSecrete: Equal(tag) },
      relations: { compte: true },
    });
    if (!carte) throw new HttpException(ExceptionCode.NOT_FOUND, 404);
    return carte;
  }
  async getByNumCarte(numCarte: string) {
    const carte = await this.carte.findOne({
      where: { numcarte: Equal(numCarte) },
      relations: { compte: true },
    });
    if (!carte) throw new HttpException(ExceptionCode.NOT_FOUND, 404);
    return carte;
  }
  async createCarte(carte: CarteDto) {
    try {
      return await this.carte.save(this.carte.create(carte));
    } catch (error) {
      throw new HttpException({ ...error }, error.code ?? 500);
    }
  }
  async updateCarte(carte: CarteDto) {
    try {
      return await this.carte.update({ id: carte.id }, carte);
    } catch (error) {
      throw new HttpException({ ...error }, error.code ?? 500);
    }
  }
}
