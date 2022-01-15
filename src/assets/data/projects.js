import { v4 as uuidv4 } from 'uuid';
import CoinTrackerImg from '../img/cointracker.jpg';
import indexLGBT from '../img/indexLGBT.png';
import commerce from '../img/ecommerce.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Index LGBT Movies and Series',
    desc: 'A website that track all the LGBT movies and series',
    img: indexLGBT,
  },
  {
    id: uuidv4(),
    name: 'e-Commerce Website',
    desc: 'A fully functional eCommerce application using commerce.js.',
    img: commerce,
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: CoinTrackerImg,
  },
];

export default projects;
