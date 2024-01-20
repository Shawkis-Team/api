import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CompteService } from './compte.service';
import { CarteDto } from 'src/dto/carte.dto';
import { ApiTags } from '@nestjs/swagger';
import { CompteDto } from 'src/dto/compte.dto';
@ApiTags('compte')
@Controller('compte')
export class CompteController {
  constructor(private service: CompteService) {}
  @Get('')
  getS() {
    return this.service.getS();
  }
  @Get(':id')
  get(@Param('id') id: number) {
    return this.service.get(id);
  }
  @Get('byNumCompte/:id')
  getByNumCompte(@Param('id') id: string) {
    return this.service.getByNumCompte(id);
  }
  @Post()
  create(@Body() item: CompteDto) {
    return this.service.create(item);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() item: CompteDto) {
    item.id = id;
    return this.service.update(item);
  }
}
