import { NFCe } from 'src/modules/nfce/nfce.dto';

/* eslint-disable prettier/prettier */
export const fakeData: NFCe[] = [
  {
    id: 'C07F269CE83F769A4EA83E57DD801AE2CD6CDA81',
    items: [
      {
        id: 'b857fee8-98ac-4e80-8324-6a9d841c04a3',
        produto: {
          id: 'f374372e-13e0-453c-ba29-0b93d8c0198b',
          barcode: '1234567890123',
          descricao: 'Produto Fake',
          imagem: 'https://cdn-cosmos.bluesoft.com.br/products/7896067200162',
          valor: 5.49,
        },
        valor: 5.49,
        quantidade: 1,
      },
    ],
    total: 0,
  },
];
