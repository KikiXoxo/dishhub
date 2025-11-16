import {
  GiHamburger,
  GiDonut,
  GiCarrot,
  GiMagnifyingGlass,
} from 'react-icons/gi';
import { LiaFlagUsaSolid } from 'react-icons/lia';
import { GoHeartFill } from 'react-icons/go';

const sidebarLinks = [
  {
    name: 'Discover',
    path: '/discover',
    icon: GiDonut,
  },
  {
    name: 'Categories',
    path: '/categories',
    icon: GiHamburger,
  },
  {
    name: 'Ingredients',
    path: '/ingredients',
    icon: GiCarrot,
  },
  {
    name: 'Locations',
    path: '/areas',
    icon: LiaFlagUsaSolid,
  },
  {
    name: 'Search',
    path: '/search',
    icon: GiMagnifyingGlass,
  },
  {
    name: 'Favorites',
    path: '/favorites',
    icon: GoHeartFill,
  },
];

export default sidebarLinks;
