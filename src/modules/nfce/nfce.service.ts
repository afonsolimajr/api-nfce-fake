import { Injectable } from '@nestjs/common';
import { NFCe } from './nfce.dto';
import { fakeData } from 'src/data/fakedata';

@Injectable()
export class NFCeService {
  getNFCe(id: string): NFCe {
    const retorno = fakeData[0];
    retorno.id = id;
    return retorno;
  }

  getAll(): NFCe[] {
    return fakeData;
  }
}
