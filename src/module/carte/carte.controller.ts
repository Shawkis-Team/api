import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CarteServie } from './carte.service';
import { CarteDto } from 'src/dto/carte.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('carte')
@Controller('carte')
export class CarteController {
  constructor(private service: CarteServie) {}
  @Get('')
  getCartes() {
    return this.service.getCartes();
  }
  @Get('tag/:tag')
  getCarteByTag(@Param('tag') tag: string) {
    return this.service.getCarteByTag(tag);
  }
  @Get('num_carte/:num')
  getCarteByNumCarte(@Param('num') num: string) {
    return this.service.getByNumCarte(num);
  }
  @Get(':id')
  getCarte(@Param('id') id: number) {
    return this.service.getCarte(id);
  }
  @Post()
  createCarte(@Body() carte: CarteDto) {
    return this.createCarte(carte);
  }
  @Put(':id')
  updateCarte(@Param('id') id: number, @Body() carte: CarteDto) {
    return this.createCarte(carte);
  }
}
