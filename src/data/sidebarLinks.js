import { GiHamburger, GiDonut, GiCarrot } from 'react-icons/gi';
import { LiaFlagUsaSolid } from 'react-icons/lia';
import { RiSearch2Fill } from 'react-icons/ri';
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
    name: 'Areas',
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
