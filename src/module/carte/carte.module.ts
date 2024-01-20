import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carte } from 'src/typeorm';
import { CarteController } from './carte.controller';
import { CarteServie } from './carte.service';

@Module({
  imports: [TypeOrmModule.forFeature([Carte])],
  controllers: [CarteController],
  providers: [CarteServie],
})
export class CarteModule {}
