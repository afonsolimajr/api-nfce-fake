import { Injectable } from '@nestjs/common';

@Injectable()
export class NFCeService {
  getNFCe(id: string) {
    return 'retorno da nfce ' + id;
  }
}
