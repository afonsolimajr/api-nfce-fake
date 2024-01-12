import { Injectable } from '@nestjs/common';
import { NFCe } from './nfce.dto';
import { fakedata } from 'src/data/fakedata';

@Injectable()
export class NFCeService {
  getNFCe(id: string): NFCe {
    const retorno = fakedata[0];
    retorno.id = id;
    return retorno;
  }

  getAll(): NFCe[] {
    return fakedata;
  }
}
