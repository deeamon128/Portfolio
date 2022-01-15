import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../img/projectImg.png';
import CoinTrackerImg from '../img/cointracker.jpg';
import CavinImg from '../img/cavinimg.jpg';
import indexLGBT from '../img/indexLGBT.png';


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
    img: indexLGBT,
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
  },
];

export default projects;
