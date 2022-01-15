import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../img/projectImg.png';
import CoinTrackerImg from '../img/cointracker.jpg';
import CavinImg from '../img/cavinimg.jpg';
import indexLGBT from '../img/indexLGBT.png';
import commerce from '../img/commerce.png';

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
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
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
