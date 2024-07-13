import Pedro from './assets/001-pedro-torres.jpg';
import Lizandra from './assets/006-lizandra.png';
import Eliabe from './assets/003-eliabe.png';
import Lucila from './assets/002-lucila.png';
import Jonas from './assets/004-jonas-william.png';
import Rafael from './assets/005-rafael.png';
import Lucas from './assets/007-lucas.png';
import Cintia from './assets/008-cintia.jpeg';
import Dominick from './assets/009-dominick.jpeg';
import Annita from './assets/010-annita.png';
import Gabriel from './assets/011-gabriel.png';
import Jezreel from './assets/012-jezreel.png';
import Jaysa from './assets/013-jaysa.png';
import Laura from './assets/014-laura.png';
import Queila from './assets/015-queila.png';
import Kesia from './assets/016-kesia.jpeg';
import MariaKlara from './assets/017-maria-klara.png';
import Victor from './assets/018-victor.png';
import Giglyene from './assets/019-giglyene.png';
import Generic from './assets/generic-avatar.jpg';

const alunos = [
  {
    id: '001',
    name: 'Pedro Torres',
    image: Pedro,
    balance: 14215 + 9090 + 9661,
  },
  {
    id: '002',
    name: 'Lizandra Thais',
    image: Lizandra,
    balance: 10742 + 8371,
  },
  {
    id: '003',
    name: 'Eliabe Mendes',
    image: Eliabe,
    balance: 13370 + 7704 + 11338,
  },
  {
    id: '004',
    name: 'Lucila Poggi',
    image: Lucila,
    balance: 13991 + 9061 + 11597,
  },
  {
    id: '005',
    name: 'Jonas William',
    image: Jonas,
    balance: 11060,
  },
  {
    id: '006',
    name: 'Rafael Machado',
    image: Rafael,
    balance: 10917 + 8837 + 12048,
  },
  {
    id: '007',
    name: 'Lucas Almeida',
    image: Lucas,
    balance: 10604,
  },
  {
    id: '008',
    name: 'Ana Cíntia',
    image: Cintia,
    balance: 10297 + 6077 + 8439,
  },
  {
    id: '009',
    name: 'Dominick',
    image: Dominick,
    balance: 8869 + 5664 + 11731,
  },
  {
    id: '010',
    name: 'Annita',
    image: Annita,
    balance: 7846,
  },
  {
    id: '011',
    name: 'Gabriel de Holanda',
    image: Gabriel,
    balance: 7587 + 4303,
  },
  {
    id: '012',
    name: 'Jezreel Ferreira',
    image: Jezreel,
    balance: 7540 + 5883 + 9863,
  },
  {
    id: '013',
    name: 'Jaysa Amâncio',
    image: Jaysa,
    balance: 6246,
  },
  {
    id: '014',
    name: 'Queila Mota',
    image: Queila,
    balance: 8160 + 9588,
  },
  {
    id: '015',
    name: 'Laura Francely',
    image: Laura,
    balance: 8734,
  },
  {
    id: '016',
    name: 'Glauco Monteiro',
    image: Generic,
    balance: 8263 + 11581,
  },
  {
    id: '017',
    name: 'Késia Silva',
    image: Kesia,
    balance: 8222,
  },
  {
    id: '018',
    name: 'Maria Klara',
    image: MariaKlara,
    balance: 8101 + 10568,
  },
  {
    id: '019',
    name: 'Victor',
    image: Victor,
    balance: 5284,
  },
  {
    id: '020',
    name: 'Arthur Henrique',
    image: Generic,
    balance: 3993,
  },
  {
    id: '021',
    name: 'Giglyene Monteiro',
    image: Giglyene,
    balance: 3647 + 12400,
  },
  {
    id: '022',
    name: 'Eloizy',
    image: Generic,
    balance: 8558,
  },
];

const alunosOrdenados = [...alunos].sort((a, b) => b.balance - a.balance);

export default alunosOrdenados;
