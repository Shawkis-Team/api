import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carte, Compte } from 'src/typeorm';
import { CompteController } from './compte.controller';
import { CompteService } from './compte.service';

@Module({
  imports: [TypeOrmModule.forFeature([Compte, Carte])],
  controllers: [CompteController],
  providers: [CompteService],
})
export class CompteModule {}
