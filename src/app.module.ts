import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NFCeController } from './modules/nfce/nfce.controller';
import { NFCeService } from './modules/nfce/nfce.service';

@Module({
  imports: [],
  controllers: [AppController, NFCeController],
  providers: [AppService, NFCeService],
})
export class AppModule {}
