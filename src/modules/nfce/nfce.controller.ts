import { Controller, Get, Param } from '@nestjs/common';
import { NFCeService } from './nfce.service';

@Controller('consultaNFCe')
export class NFCeController {
  constructor(private readonly nfceService: NFCeService) {}

  @Get(':id')
  getCupom(@Param('id') id: string) {
    //processa a consulta do cupom pelo id aqui
    return this.nfceService.getNFCe(id);
  }
} 
