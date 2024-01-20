import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './module/users/users.module';
import { DeviceModule } from './module/device/device.module';
import { CarteModule } from './module/carte/carte.module';
import { entyties } from './typeorm';
import { CompteModule } from './module/compte/compte.module';
import { TransactionModule } from './module/transaction/transaction.module';
import { ConfigModule } from '@nestjs/config';
import { TicketModule } from './module/ticket/module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '84.16.72.210',
      port: 3306,
      username: 'p38rj_bazagouser',
      password: 'd_8dMHI4qX4',
      dateStrings: true,
      entities: entyties,
      database: 'p38rj_bdbazagor',
      synchronize: false,
    }),
    UsersModule,
    DeviceModule,
    CarteModule,
    CompteModule,
    TicketModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
